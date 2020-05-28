import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ChatIcon from '@material-ui/icons/Chat'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';;

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <AccountCircleIcon />
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>

      <div className={classes.item}>
        <ChatIcon />
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <AnnouncementIcon />
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>

      <div className={classes.item}>
        <LibraryMusicIcon />
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>

      <div className={classes.item}>
        <PeopleAltIcon />
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <SettingsIcon />
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>

    </nav>
  )
}

export default Navbar;