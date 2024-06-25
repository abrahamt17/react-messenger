import React, { useState } from 'react';
import './login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';
import upload from '../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = e => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData.entries());
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      if (!avatar.file) {
        throw new Error('Avatar file is not selected');
      }
  
      const imgUrl = await upload(avatar.file);
  
      if (!imgUrl) {
        throw new Error('Image upload failed');
      }
  
      // Firestore connection
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: []
      });
  
      toast.success(`Created successfully: ${username}`);
    } catch (err) {
      console.error("Error in handleRegister:", err);
      toast.error(err.message, { autoClose: 2000 });
    }
  };
  

  const handleLogin = e => {  
    e.preventDefault();
    // Add login logic here
  };
  
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Sign In</button> 
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create New Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar} />
          <input type="text" name="username" placeholder='Username' />
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Sign Up</button> 
        </form>
      </div>
    </div>
  );
};

export default Login;
