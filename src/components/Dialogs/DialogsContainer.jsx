import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextCreator,sendMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

let onSendMessageClick = ()=>{
  props.store.dispatch(sendMessageCreator()); 

}
let onMessageTyping = (newMessage)=>{
 props.store.dispatch(updateNewMessageTextCreator(newMessage)); 


}



    return (
       
            <Dialogs updateNewMessageText = {onMessageTyping} 
            sendMessage = {onSendMessageClick}
              dialogsPage = {state}
            />
    )
}

export default DialogsContainer;