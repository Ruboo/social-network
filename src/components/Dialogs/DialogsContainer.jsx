import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state)=>{
  return{
    dialogsPage:state.dialogsPage,
    isAuth:state.auth.isAuth

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




let AuthRedirectComponent = withAuthRedirect(Dialogs);


 

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);


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