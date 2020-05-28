import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let state = props.dialogsPage;

 
let dialogsElements =state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
let messageElement = state.messagesData.map(message=> <Message message={message.message} />)
let newMessageText = state.newMessageText;
let onSendMessageClick = ()=>{
  props.sendMessage(); 

}
let onMessageTyping = (e)=>{
 let newMessage =  e.target.value;
 props.updateNewMessageText(newMessage);

}

if(!props.isAuth) return <Redirect to = {'/login'}/>;



    return (
        <div className={classes.dialogs}>    
            <div className={classes.dialogsItems}>
    
                { dialogsElements }

            </div>

            <div className={classes.messages}>

            {messageElement}

                <div>
        <div>
          <textarea placeholder = 'enter message here' 
                    value = {newMessageText}
                    onChange = {onMessageTyping}></textarea>
        </div>
        <div>
          <button onClick ={ onSendMessageClick } >Send</button>
        </div>
      </div>
            </div>
            
            
        </div>
    )
}

export default Dialogs;