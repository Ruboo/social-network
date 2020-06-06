import React from 'react';
import classes from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

  let state = props.dialogsPage;


  let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messageElement = state.messagesData.map(message => <Message message={message.message} />)
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>

        {dialogsElements}

      </div>
      <div>
        <div className={classes.messages}>

          {messageElement}


        </div>
       
          <AddMessageForm onSubmit={addNewMessage} />
        
      </div>
    </div>
  )
}



export default Dialogs;