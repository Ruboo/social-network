let initialState = {

    dialogsData: [
        { id: 1, name: 'Artash' },
        { id: 2, name: 'Vnyush' },
        { id: 3, name: 'Gve' },
        { id: 4, name: 'Sashik' },
        { id: 5, name: 'Vle' }
    ],
    messagesData: [
        { id: 1, message: 'ciik' },
        { id: 2, message: 'Zxkum' },
        { id: 3, message: ' tidin' }
    ],
    newMessageText: ''
}


const dialogsReducer = (state = initialState,action) =>{



if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
    return {
        ...state,
        newMessageText: action.newMessage
    };
    } else if(action.type === 'SEND_MESSAGE') {
        let newMessage = state.newMessageText;
        return {
            ...state,
            newMessageText : '',
            messagesData:[...state.messagesData,{ id:6, message: newMessage }]
        };
    }
    return state;
}


export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
}


export const updateNewMessageTextCreator = (newMessage) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: newMessage
    }
}



export default dialogsReducer;