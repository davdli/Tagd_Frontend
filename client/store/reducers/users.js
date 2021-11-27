import axios from 'axios'

const GET_USERS = 'GET_USERS';

const getUsers = users => {
    return {
        type: GET_USERS,
        users
    }
}