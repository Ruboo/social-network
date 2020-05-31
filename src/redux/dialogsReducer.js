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
    ]
}


const dialogsReducer = (state = initialState,action) =>{

if(action.type === 'SEND_MESSAGE') {
        let newMessage = action.newMessageText;
        return {
            ...state,
            messagesData:[...state.messagesData,{ id:6, message: newMessage }]
        };
    }
    return state;
}


export const sendMessageCreator = (newMessageText) => {
    return {
        type: 'SEND_MESSAGE',
        newMessageText
    }
}






export default dialogsReducer;