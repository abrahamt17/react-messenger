
import React, { useEffect } from "react";
import Chats from "./chat/Chats";
import List from "./list/list";
import Detail from "./details/detail";
import Login from "./login/Login";

import { ToastContainer, toast } from 'react-toastify';
 import Notification from "./notification/notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";



const App = () => {

const {currentUser ,isLoading, fetchUserInfo }=useUserStore

useEffect(()=>{
  const unSub= onAuthStateChanged(auth, (user)=>{
    fetchUserInfo(user.uid);

  });
  return ()=>{
    unSub();
  }
}, [fetchUserInfo]);
console.log(currentUser);

if (isLoading) return <div className="loading">Loading...</div>


  return (
    <div className='container flex '>
      
        {currentUser? ( 
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