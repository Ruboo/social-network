import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from '../../../assets/images/preloader.svg'


const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <div>
        <img src={preloader} />
      </div>
    )
  }
  return (
    <div>
      <div>
        <img src="https://q-xx.bstatic.com/images/hotel/max1024x768/104/104527459.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img src = {props.profile.photos.large} />
        ava + disc
     </div>
    </div>
  )
}

export default ProfileInfo;