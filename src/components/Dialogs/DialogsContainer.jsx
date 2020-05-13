import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
  return{
    dialogsPage:state.dialogsPage

  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
    updateNewMessageText:(newMessage)=>{  
      dispatch(updateNewMessageTextCreator(newMessage));
    },
    sendMessage:()=>{
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;

// let onSendMessageClick = ()=>{
//   props.store.dispatch(sendMessageCreator()); 

// }
// let onMessageTyping = (newMessage)=>{
//  props.store.dispatch(updateNewMessageTextCreator(newMessage)); 


// }



//     return (
       
//             <Dialogs updateNewMessageText = {onMessageTyping} 
//             sendMessage = {onSendMessageClick}
//               dialogsPage = {state}
//             />
//     )
// }

export default DialogsContainer;