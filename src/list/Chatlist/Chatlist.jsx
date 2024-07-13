import React, { useEffect, useState } from 'react';
import './Chatlist.css';
import AddUser from './addUser/addUser';
import { useUserStore } from '../../lib/userStore';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chatlist = () => {
  const [adMode, setAddMode] = useState(false);
  const [Chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
      if (doc.exists()) {
        setChats(Object.values(doc.data()));
      } else {
        setChats([]);
      }
    });
    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log(Chats);

  return (
    <div>
      <div className='Chatlist'>
        <div className='search'>
          <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type='text' className='' placeholder='search' />
          </div>
          <img
            className='add'
            src={adMode ? './minus.png' : './plus.png'}
            alt=''
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
        {Chats.map((chat) => (
          <div className='item' key={chat.chatId}>
            <img src="./avatar.png" alt="" />
            <div className='texts'>
              <span>{chat.username}</span>
              <h1>Hellooo</h1>
            </div>
          </div>
        ))}
      </div>
      {adMode && <AddUser />}
    </div>
  );
};

export default Chatlist;