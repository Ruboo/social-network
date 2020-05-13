import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreater,unfollowActionCreater, setUsersActionCreater } from '../../redux/usersReducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

