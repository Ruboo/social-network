let initialState = {
    postsData: [
            { id: 1, message: 'hiiii', likesCount: 12 },
            { id: 2, message: 'This my post', likesCount: 23 }
        ],
        newPostText: ''
    };

const profileReducer = (state = initialState,action) =>{

 if (action.type === 'ADD_POST') {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';

        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
           state.newPostText = action.newText;
        } 

    return state;
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}


export const updateNewPostTextActionCreator = (text) => {
    console.log(text)
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: text
    }
}

export default profileReducer;