import React from 'react';
import { connect } from 'react-redux';
import { follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/preloader.svg'
import {usersAPI } from '../../api/api';




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber , this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <> 
            {this.props.isFetching ? <img src = {preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}


            />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => {
//             dispatch(followActionCreater(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreater(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreater(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreater(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountActionCreater(totalCount));
//         },
//         toggleIsFetching: (isFetching) => { 
// dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }






export default connect(mapStateToProps, {
    follow,
    unfollow,  
    setUsers,  
    setCurrentPage,  
    setUsersTotalCount,  
    toggleIsFetching
    
})(UsersContainer);

