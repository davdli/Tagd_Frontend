import axios from 'axios'
import {authenticateRequest} from '../gateKeepingMiddleware'
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

export const fetchSingleUser = (id) => async dispatch => {
    try {
        const user = await authenticateRequest("get", `/api/users/${id}`)
        if(user){
            dispatch(getUser(user))
        }
    } catch (error) {

    }
}
