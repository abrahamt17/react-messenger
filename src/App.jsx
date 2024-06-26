
import React, { useEffect } from "react";
import Chats from "./chat/Chats";
import List from "./list/list";
import Detail from "./details/detail";
import Login from "./login/Login";

import { ToastContainer, toast } from 'react-toastify';
 import Notification from "./notification/notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
const App = () => {

useEffect(()=>{
  const unSub= onAuthStateChanged(auth, (user)=>{
    console.log(user.uid);
  });
  return ()=>{
    unSub();
  }
}, []);


const user= false ;

  return (
    <div className='container flex '>
      
        { user ? ( 
        <> <List/>
          <Chats/>
           <Detail/>
           </>
           ) :(<Login/>)}
           <Notification/>
    </div>
  
  )
}

export default App