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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }