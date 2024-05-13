import React, { useContext, useState } from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { AuthContext } from "../Config/AuthContext";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function SetProfile() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${selectedImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          setError(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(currentUser, {
              displayName,
              photoURL: downloadURL,
            });
            await updateDoc(doc(db, "users", currentUser.uid), {
              displayName,
              email,
              photoURL: downloadURL,
            });
            navigate("/home");
          } catch (error) {
            setError(error);
          }
        }
      );
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="background_page h-screen">
        <div className="overlay h-screen flex justify-center items-center">
          <div className="w-[400px] bg-[rgba(0,0,0,0.9)] p-10 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <h1 className="text-center text-white text-4xl font-extrabold font-mono p-3 shadow-lg shadow-gray-500 my-5">
                  Update Profile
                </h1>
              </div>
              <div className="my-2 flex justify-center items-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="uploadImage"
                />
                <label htmlFor="uploadImage" className="cursor-pointer">
                  <img
                    src={currentUser.photoURL}
                    className="w-[70px] h-[70px] object-cover rounded-full"
                    alt="User"
                  />
                </label>
              </div>
              <div className="text-center text-white">
                <p className="text-white text-center">Update Image</p>
              </div>
              <div className="my-2 mt-10">
                <AppInp
                  label="Display Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="my-2">
                <AppInp
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
                <AppBtn label="Save" type="submit" />
              </div>
              {error && <div className="text-red-500">{error.message}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetProfile;
