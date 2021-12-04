import axios from 'axios'
import {authenticateRequest} from '../gateKeepingMiddleware'

//ACTION TYPES
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const GET_HOST = 'GET_HOST';
const CREATE_HOST = 'CREATE_HOST';

//USER ACTION CREATORS
const getUser = (user) => {
    return {
        type: GET_USER,
        user
    }
}
const createUser = (newUser) => {
  return {
      type: CREATE_USER,
      newUser
  }
}

//HOST ACTION CREATORS
const getHost = (host) => {
  return {
      type: GET_HOST,
      host
  }
}
const createHost = (newHost) => {
  return {
      type: CREATE_HOST,
      newHost
  }
}

//USER THUNKS
export const fetchSingleUser = (email, password) => async dispatch => {
    try {
        const { user } = await axios.get(`https://tagd-backend.herokuapp.com/api/users/${id}`)
        dispatch(getUser(user))
    } catch (error) {
        console.log(error)
    }
}
export const createSingleUser = (userData) => async dispatch => {
  try {
      const newUser = await authenticateRequest("post", `/api/user`, userData)
      if (newUser) {
          dispatch(createUser(newUser))
      }
  } catch (error) {
      console.log(error)
  }
}

// HOST THUNKS
export const fetchSingleHost = (email, password) => async dispatch => {
  try {
      const { host } = await axios.get(`https://tagd-backend.herokuapp.com/api/hosts/${id}`)
      dispatch(getHost(host))
  } catch (error) {
      console.log(error)
  }
}

export const createSingleHost = (hostData) => async dispatch => {
  try {
      const newHost = await authenticateRequest("post", `/api/host`, hostData)
      if (newHost) {
          dispatch(createHost(newHost))
      }
  } catch (error) {
      console.log(error)
  }
}

//STATE
const initialState = []
export default usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return action.user
        case CREATE_USER:
            return [...state, action.newUser]
        case GET_HOST:
            return action.host
        case CREATE_HOST:
            return [...state, action.newHost]
        default:
            return state;
    }
}

