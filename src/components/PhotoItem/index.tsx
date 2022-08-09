import React, { Dispatch, SetStateAction } from 'react'
import { Photo } from '../../types/Photo'
import * as C from "./styles"
import {RiDeleteBin5Line} from "react-icons/ri"
import {deletePhoto} from "../../services/photos"
type Props = {
    photos: Photo[],
    setPhotos: Dispatch<SetStateAction<Photo[]>>,
    item: Photo
}


export const PhotoItem = ({item, setPhotos, photos}: Props) => {

  const deleteImage = async (photo:Photo) => {
    const tempList:any=[]
    photos.map((item:Photo) => {
      if(item.url !== photo.url) {
        tempList.push(item)
      } 
    })
    setPhotos(tempList)
    await deletePhoto(photo)

  }
  return (
    <C.Container>
        <img src={item.url} alt={item.name} />
        <span>{item.name}</span>
        <button className='delete' onClick={() => deleteImage(item)}><RiDeleteBin5Line /></button>
    </C.Container>

  )
}