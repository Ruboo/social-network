import React from 'react';
import styles from './Users.module.css'
import noPhoto from '../../assets/images/noPhoto.svg'
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardGroup'



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }

    let pagesList = pages.slice(0, 5)


    return (
        <div >


            <Pagination>
                <Pagination.Prev />
                {pagesList.map(p => {
                    return <Pagination.Item className={props.currentPage === p}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>{p}</Pagination.Item>
                })}

                <Pagination.Next />

            </Pagination>
            <CardColumns>

            {
                props.users.map(u => <div key={u.id} className={styles.users}>
                    <Card style={{ width: '10rem'}} hover = 'translate3d(0px, 0, 0)' >
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : noPhoto} className={styles.userPhoto} />
                                </NavLink>
                            </div>
                            <div className={styles.btn}>
                                {u.followed
                                    ? <Button variant="danger" disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {

                                            props.unfollow(u.id)

                                        }} > Unfollow </Button>
                                    : <Button variant="success" disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.follow(u.id)

                                        }}> Follow </Button>}

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
                    </Card>
                </div>)
            }
            </CardColumns>

        </div>
    )
}


export default Users;