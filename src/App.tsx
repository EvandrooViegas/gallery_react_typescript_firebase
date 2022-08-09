import { FormEvent, useEffect, useState } from "react"
import * as C from "./App.styles"
import * as Photos from "./services/photos"
import { Photo } from "./types/Photo"
import {PhotoItem} from "./components/PhotoItem"


export default function App () {
  const [laoding, setLoading] = useState<boolean>(false)
  const [uploading, setUploading] = useState<boolean>(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [error, setError] = useState<string>()
  useEffect(() => { 
      const getPhotos = async () => {
        setLoading(true)
        setPhotos(await Photos.getAll())
        setLoading(false)
      } 

      getPhotos()
  }, [])

  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const file = formData.get("image") as File
    if(file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error) {
        setError(result.message)
      } else {
        setPhotos([...photos, result])
      }
    }
  }
  
  return (
    
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>
        {error &&
          <div className="error">
            <p>{error}</p>
            <button onClick={() => setError("")}>x</button>
          </div>
        }
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image"/>
          {uploading && 
            <span>Uploading...</span>
          }
          <button>Submit</button>
          
        </C.UploadForm>
        {laoding && 
          <C.ScreenWarning>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!laoding && photos.length > 0 && 
        
          <C.PhotoList>
            {photos.map((item, index) => (
         
              <PhotoItem photos={photos} setPhotos={setPhotos} key={index} item={item} />
        
            ))}

          </C.PhotoList>
        }

        {!laoding && photos.length === 0 && 
          
          <C.ScreenWarning>
            <div className="emoji">😐</div>
            <div>Nã há fotos cadastradas...</div>

          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  )
}