
import React from "react";
import Chats from "./chat/Chats";
import List from "./list/list";
import Detail from "./details/detail";
import Login from "./login/Login";
import { ToastContainer, toast } from 'react-toastify';
 import Notification from "./notification/notification";
const App = () => {

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