import { usersAPI, profileAPI } from "../api/api";



let initialState = {
    postsData: [
        { id: 1, message: 'hiiii', likesCount: 12 },
        { id: 2, message: 'This my post', likesCount: 23 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    if (action.type === 'ADD_POST') {
        let newPost = {
            id: 3,
            message: action.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
        };
    }
      
    if (action.type === 'SET_USER_PROFILE') {
        return { ...state, profile: action.profile }
    }

    if (action.type === 'SET_STATUS') {
        return { ...state, status: action.status }
    }

    return state;
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: 'ADD_POST',
        newPostText
    }
}



export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE', profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS', status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}



export default profileReducer;