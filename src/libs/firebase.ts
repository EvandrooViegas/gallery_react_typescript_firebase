import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAQwk5t6CCb6iSnTDhPuVDFxClJQvPRUKw",
    authDomain: "galleryfirebase-cf5f8.firebaseapp.com",
    projectId: "galleryfirebase-cf5f8",
    storageBucket: "galleryfirebase-cf5f8.appspot.com",
    messagingSenderId: "273884525080",
    appId: "1:273884525080:web:09c348340c1564a3c4496d",
    measurementId: "G-0D9YHGGHG9"
};

console.log(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig)
export const storge = getStorage(firebaseApp)