import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'hiiii', likesCount: 12 },
                { id: 2, message: 'This my post', likesCount: 23 }
            ],
            newPostText: ''
        },

        dialogsPage: {
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
                { id: 3, message: 'dnem vzit' }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callRender() {
        console.log('data has ben changed');
    },

    subscribe(observer) {
        this._callRender = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callRender(this._state);

    }

}

window.store = store;
export default store;