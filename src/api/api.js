import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API-KEY':'598c15f0-e3a6-4510-a0aa-719f48e4eb81'
    }

})


export const usersAPI = {
     getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(userId){

      return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)    
    }

}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }