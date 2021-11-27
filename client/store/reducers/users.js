import axios from 'axios'

//ACTION TYPES
const GET_USERS = 'GET_USERS';


//ACTION CREATORS
const getUsers = users => {
    return {
        type: GET_USERS,
        users
    }
}

const getUser = user => {
    return {
        type: GET_USER,
        user
    }
}

//THUNKS

export const fetchOrCreateSingleUser = () => {

}
