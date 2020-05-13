import React from 'react';
import styles from './Users.module.css'


let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers(
            [
                { id: 1, 
                    photoUrl:'https://lh3.googleusercontent.com/proxy/aqtuHYGXktnih-ktpJE4MKCB5kCEguvS9F_IZCQUdRTocJP1kFiQX2oc4pXUsPUXGm_UaMsVX1fOgTJ2_K8PhVeeb3pV0167XXFin12daT5dLYVRKJwXaQ',
                    followed: false, fullName: 'Artash', status: 'im A boss', location: { city: 'Armenia', country: 'Erevan' } },
                { id: 2,
                     photoUrl:'data:image/jpeg;base64,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',
                     followed: true, fullName: 'Vne', status: 'im A boss', location: { city: 'Armenia', country: 'Erevan' } },
                { id: 3, 
                    photoUrl:'https://lh3.googleusercontent.com/proxy/aqtuHYGXktnih-ktpJE4MKCB5kCEguvS9F_IZCQUdRTocJP1kFiQX2oc4pXUsPUXGm_UaMsVX1fOgTJ2_K8PhVeeb3pV0167XXFin12daT5dLYVRKJwXaQ',
                    followed: true, fullName: 'Gve', status: 'im A boss', location: { city: 'Armenia', country: 'Gyumry' } },
                { id: 4,
                     photoUrl:'https://lh3.googleusercontent.com/proxy/aqtuHYGXktnih-ktpJE4MKCB5kCEguvS9F_IZCQUdRTocJP1kFiQX2oc4pXUsPUXGm_UaMsVX1fOgTJ2_K8PhVeeb3pV0167XXFin12daT5dLYVRKJwXaQ',
                     followed: false, fullName: 'Exo', status: 'im A boss', location: { city: 'Armenia', country: 'Goris' } },
                { id: 5,
                     photoUrl:'https://lh3.googleusercontent.com/proxy/aqtuHYGXktnih-ktpJE4MKCB5kCEguvS9F_IZCQUdRTocJP1kFiQX2oc4pXUsPUXGm_UaMsVX1fOgTJ2_K8PhVeeb3pV0167XXFin12daT5dLYVRKJwXaQ',
                     followed: true, fullName: 'Davo', status: 'im A boss', location: { city: 'Armenia', country: 'Xarabax' } },
                { id: 6,
                     photoUrl:'https://lh3.googleusercontent.com/proxy/aqtuHYGXktnih-ktpJE4MKCB5kCEguvS9F_IZCQUdRTocJP1kFiQX2oc4pXUsPUXGm_UaMsVX1fOgTJ2_K8PhVeeb3pV0167XXFin12daT5dLYVRKJwXaQ',
                     followed: false, fullName: 'Shmolik', status: 'im A boss', location: { city: 'Armenia', country: 'Xapan' } }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div className = {styles.btn}>
                         {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>

                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}


export default Users;