import React, { useState } from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Config/FirebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
    const [err, setErr] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
   
      const file = e.target[0].files[0]
      const displayName = e.target[1].value
      const email = e.target[2].value
      const password = e.target[3].value
   
   
     const res = await createUserWithEmailAndPassword(auth, email, password)
     try {
   
   const storage = getStorage();
   const storageRef = ref(storage, 'images/rivers.jpg');
   
   const uploadTask = uploadBytesResumable(storageRef, file);
   
   uploadTask.on('state_changed', 
     (snapshot) => {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       
     }, 
     (error) => {
       setErr(error)
     }, 
     () => {
       getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
         await updateProfile(res.user, {
            displayName,
          photoURL: downloadURL
         })  
         await setDoc(doc(db, "users", res.user.uid), {
           uid: res.user.uid,
           photoURL: downloadURL,
           displayName,
           email,
         });
   
         await setDoc(doc(db, "usersChats", res.user.uid), {})
         navigate("/home")
       });
     }
   );
     } catch (error) {
       setErr(error)
     }
     
   }
   

    return (
        <>
            <div className="background_page h-screen">
                <div className="overlay h-screen flex justify-center items-center">
                    <div className="w-[400px] bg-[rgba(0,0,0,0.9)] px-10 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1 className="text-center text-white text-4xl font-extrabold font-mono p-3 shadow-lg shadow-gray-500 mt-5 ">
                                    SignUp
                                </h1>
                            </div>
                            <div className="my-2 flex justify-center items-center">
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="uploadImage"
                                />
                                <label htmlFor="uploadImage" className="cursor-pointer">
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            className="w-[70px] h-[70px] object-cover rounded-full"
                                            alt="User"
                                        />
                                    ) : (
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHkj6-Tndku8K2387sMaBf2DaiwfBtHQw951-fc9zzA&s"
                                            className="w-[70px] h-[70px] object-cover rounded-full"
                                            alt="User"
                                        />
                                    )}
                                </label>
                            </div>
                            <div className="text-center text-white"></div>
                            <p>Upload Image</p>
                            <div className="my-2">
                                <AppInp label="Enter Your Name" />
                            </div>
                            <div className="my-2">
                                <AppInp label="Enter Your Email" />
                            </div>
                            <div className="my-2">
                                <AppInp label="Enter Your Password" type="password" />
                            </div>
                            <div className="my-2">
                                <AppBtn label="SignUp" />
                            </div>
                            <div className="py-2 flex text-white">
                                <p className="text-gray-300 text-lg">I have Already an Account.</p>
                                <Link to="/" className="font-bold px-2 text-lg text-white hover:text-blue-500">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
