import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


const Header = (props) => {
    return (
       
        <header className={classes.head}>
            <img src='https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'></img>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <Button variant="light" onClick={props.logout} >Log out</Button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

       </div>

        </header>
       
    )
}

export default Header;