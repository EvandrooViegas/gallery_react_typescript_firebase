import { Photo } from './../types/Photo';
import {storge as storage} from "../libs/firebase"
import {ref, listAll, getDownloadURL, uploadBytes, deleteObject} from "firebase/storage"
import {v4 as createId} from "uuid"
export const getAll = async () => {
    let list:Photo[] = []

    const imagesFolder = ref(storage, "images")
    const photoList = await listAll(imagesFolder)
    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list
}

export const insert = async (file: File) => {
    if(['image/jpeg', "image/jpg", "iamge/png"].includes(file.type)) {
        let newFile = ref(storage, `images/${createId()}`)
        let upload = await uploadBytes(newFile, file)
        return {
            name: upload.ref.name, 
            url: await getDownloadURL(upload.ref) 
        } as Photo
    } else {
        return new Error("Tipo de arquivo nã permitido")
    }
}

export const deletePhoto = async (file: Photo) => {
    if(file) {
        const desertRef = ref(storage, `images/${file.name}`);
        
        deleteObject(desertRef).then(() => {
        }).catch((error) => {
        });
    } else {
        return new Error("Não foi forneciada nenhuma foto")
    }
}   