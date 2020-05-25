import React from 'react';
import styles from './Users.module.css'
import noPhoto from '../../assets/images/noPhoto.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div className={styles.pItems}>
                {pages.map(p => {

                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : noPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div className={styles.btn}>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers : {
                                            'API-KEY':'598c15f0-e3a6-4510-a0aa-719f48e4eb81'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)

                                            }
                                        })

                                }} > Unfollow </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers : {
                                            'API-KEY':'598c15f0-e3a6-4510-a0aa-719f48e4eb81'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)

                                            }
                                        })
                                }}> Follow </button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>

                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}


export default Users;