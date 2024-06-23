import React from 'react'
import './addUser.css';
function AddUser() {
  return (
    <div className='addUser'>
<form>

  <input type='text' placeholder='Username'username name=''></input>
  <button >search</button>
  
</form>

<div className='user'>
  <div className='detail'>
  <img src="./avatar.png" alt="" />
  <span>Avram ab</span>
  </div>
  <button >Add user</button>
</div>

    </div>
  )
}

export default AddUser;