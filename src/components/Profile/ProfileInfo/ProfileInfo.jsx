import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://q-xx.bstatic.com/images/hotel/max1024x768/104/104527459.jpg"></img>
      </div>
      <div className = {classes.descriptionBlock}>
        ava + disc
     </div>
    </div>
  )
}

export default ProfileInfo;