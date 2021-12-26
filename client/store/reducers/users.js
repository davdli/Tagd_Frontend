import axios from 'axios';

//ACTION TYPES
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';

//ACTION CREATORS
const getUser = (user) => {
    return {
        type: GET_USER,
        user
    }
};

const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    }
};

const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};

//THUNKS
export const fetchSingleUser = (email, password) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('https://tagd-backend.herokuapp.com/auth/login', {
                email,
                password
            });
            dispatch(getUser(data));
        } catch (error) {
            console.log(error);
        }
    }
};

export const createSingleUser = (userData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`https://tagd-backend.herokuapp.com/auth/signup`, userData);
            if (data) {
                dispatch(createUser(data));
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export const updateSingleUser = (userData) => {
  return async (dispatch) => {
      try {
        const { data } = await axios.put('https://tagd-backend.herokuapp.com/api/users/3', userData);
        dispatch(updateUser(data));
      } catch (error) {
        console.log(error);
      }
  }
};

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER:
            return action.user
        case CREATE_USER:
            return action.user
        case UPDATE_USER:
            return action.user
        default:
            return state;
    }
}
