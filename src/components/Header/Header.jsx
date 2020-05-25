import React from 'react';
import classes from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.head}>
<img src = 'https://i.pcmag.com/imagery/articles/05haui1ojHLMIBhK092rpj5-1.fit_scale.size_2698x1517.v1573867318.jpg'></img>
       
       <div className = {classes.loginBlock}>
{props.isAuth ? props.login
    : <NavLink to = {'/login'}>Login</NavLink>}

       </div>
       
       </header>
    )
}

export default Header;