import React, { useState } from 'react'
import './login.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';

const Login=()=> {
const [avatar, setAvatar]= useState({
  file:null,
  url:""
})

const handleAvtar = e => {
  if (e.target.files[0]) {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }
}


// Firrebase user


const handleRegister=async (e)=>{
  e.preventDefault();
  const formData= new FormData(e.target)
  const {username, email, password} = Object.fromEntries(formData);
 try {
  const res = await createUserWithEmailAndPassword(auth, email, password);


  //  firstore connection
  await setDoc(doc(db, "users", res.user.uid), {
    username,
    email,
    id: res.user.uid,
    blocked: [],
  });
  await setDoc(doc(db, "userchats", res.user.uid), {
    chats: []
  });
  
  toast.success(`created successfullyy: ${username}` );


} catch (err) {
  console.log(err);
toast.error(err.message, { autoClose: 2000 });
}
}


  // console.log(username);

//firestore 


// Add a new document in collection "cities"


const handleLogin = e =>{  
e.preventDefault() 

}
  
  return (
    <div className='login'>
        <div className="item">
            <h2>welcomme back</h2>
            <form  action="">
               <input type="text" placeholder='Email'  name='email'/>
               <input type="password" placeholder='password' name='password' />
               <button>Sing In</button> 
            </form>
            
        </div>
        <div className="separator"></div>
        <div className="item">
      <h2>Create New Account</h2>
             <form onSubmit={handleRegister}>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
                upload an image
            </label>
            <input type="file" id='file' style={{display:"none"}} onChange={handleAvtar} />
           
           <input type="text" name="username" placeholder='username' />
            <input type="text" placeholder='Email'  name='email'/>
               <input type="password" placeholder='password' name='password' />
               <button>Sing Up</button> 
               </form>
    </div>
    </div>
  )
} 

export default Login




