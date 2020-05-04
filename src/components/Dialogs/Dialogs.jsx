import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextCreator,sendMessageCreator} from './../../redux/dialogsReducer'

const Dialogs = (props) => {
 
let state = props.store.getState().dialogsPage;
let dialogsElements =state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
let messageElement = state.messagesData.map(message=> <Message message={message.message} />)
let newMessageText = state.newMessageText;
let onSendMessageClick = ()=>{
  props.store.dispatch(sendMessageCreator()); 

}
let onMessageTyping = (e)=>{
 let newMessage =  e.target.value;
 props.store.dispatch(updateNewMessageTextCreator(newMessage)); 


}



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
    
                { dialogsElements }

                { /*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
            </div>

            <div className={classes.messages}>

            {messageElement}

                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}
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