import React, { useState } from 'react'
import './login.css'
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

const handleLogin = e =>{  
e.preventDefault() 
toast.warn("h");
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
             <form>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
                upload an image
            </label>
            <input type="file" id='file' style={{display:"none"}} onChange={handleAvtar} />
            <input type="text" placeholder='Email'  name='email'/>
               <input type="password" placeholder='password' name='password' />
               <button>Sing Up</button> 
               </form>
    </div>
    </div>
  )
} 

export default Login




