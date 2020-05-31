import React from 'react';
import classes from './Dialogs.module.css';
import {  Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

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

      <div className={classes.messages}>

        {messageElement}


      </div>

      <AddMessageFormRedux onSubmit = {addNewMessage}/>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMessageText' placeholder='Enter message here' />
      </div>
      <div>
        <button >Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form:'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;