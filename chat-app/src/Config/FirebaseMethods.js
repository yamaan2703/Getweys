import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "../Config/FirebaseConfig";
import uploadFile from "./UploadFile";


let auth = getAuth(app)
let db = getDatabase(app)


// export let AppSignUp = (body) => {
//     return new Promise((resolve, reject) => {
//         if (!body.email || !body.password) {
//             reject("Email and Password is Required")
//         } else {
//             createUserWithEmailAndPassword(auth, body.email, body.password).then(res => {
//         
//                 let id = res.user.uid

//                 body.id = id
//                 const reference = ref(db, `users/${id}`)
//                 set(reference, body).then(user => {
//                     resolve("User Created Successfully")
//                 }).catch(error => {
//                     reject(error)
//                 })

//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     })
// }


export let AppSignUp = (model, imageFile) => {
    return new Promise((resolve, reject) => {
      if (!model.email || !model.password) {
        reject("Email and Password are required");
      } else {
        createUserWithEmailAndPassword(auth, model.email, model.password)
          .then((res) => {
            uploadFile(imageFile)
              .then((imgURL) => {
                let id = res.user.uid;
                model.id = id;
                model.avatar = imgURL;
                const reference = ref(db, `users/${id}`);
                set(reference, model)
                  .then(() => {
                    resolve("User Created Successfully");
                  })
                  .catch((error) => {
                    reject(error);
                  });
              })
              .catch((error) => {
                reject("Error uploading image: " + error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  };


export let AppLogin = (body) => {
    return new Promise((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("Email and Password is Required")
        } else {
            signInWithEmailAndPassword(auth, body.email, body.password).then(res => {
                let id = res.user.uid

                const reference = ref(db, `users/${id}`)

                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    } else {
                        reject("No Data Found")
                    }
                })

            }).catch(err => {
                reject(err)
            })
        }
    })
}


export let AppAuth=()=>{
    return new Promise((resolve,reject)=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              resolve(uid)
              // ...
            } else {
             reject("No User is Logged in")
              // User is signed out
              // ...
            }
          });
    })
 }


//  export let AppAdd=(nodeName,body,id)=>{
//      return new Promise((resolve,reject)=>{
         
//          const TaskId = push(ref(db,`${nodeName}/`)).key        
 
//          body.id = TaskId
 
 
//          const referece = ref(db,`${nodeName}/${body.id}`)
         
//          set(referece,body).then(res=>{
//              resolve("Data Send Successfully")
//          }).catch(err=>{
//              reject(err)        
//          })
//      })
//  }  

//  export let AppGet=(nodeName,id)=>{
//      return new Promise((resolve,reject)=>{
//          const referece = ref(db,`${nodeName}/${id?id:""}`)
//          onValue(referece,(data)=>{
//              if(data.exists()){
//                  resolve(Object.values(data.val()))
//              }else{
//                  reject("No Data Found :(")
//              }
//          })
//      })
//  }


//  export let fbDelete=()=>{}
//  export let fbEdit=()=>{}
//  export let fbGetById=()=>{}