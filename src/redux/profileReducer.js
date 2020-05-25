let initialState = {
    postsData: [
        { id: 1, message: 'hiiii', likesCount: 12 },
        { id: 2, message: 'This my post', likesCount: 23 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    if (action.type === 'ADD_POST') {
        let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
        };
        // stateCopy.postsData = [...state.postsData];
        // stateCopy.postsData.push(newPost);
        // stateCopy.newPostText = '';

    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
        return {
            ...state,
            newPostText: action.newText
        };
    }

    if (action.type === 'SET_USER_PROFILE') {
        return { ...state, profile: action.profile }
    }

    return state;
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',profile
    }
}

export default profileReducer;