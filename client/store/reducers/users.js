import axios from 'axios';

//ACTION TYPES
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';

//ACTION CREATORS
const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user,
    }
};

const createUser = (user) => {
    return {
        type: CREATE_USER,
        payload: user,
    }
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user,
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
            // dispatch(updateUser(data));
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

// export const updateSingleUser = (userData) => {
//   return async (dispatch) => {
//       try {
//         const { data } = await axios.put('https://tagd-backend.herokuapp.com/api/users/3', userData);
//         dispatch(updateUser(data));
//       } catch (error) {
//         console.log(error);
//       }
//   }
// };
// export const updateSingleUser = async (userData) => {
//     try {
//     const { data } = await axios.put('https://tagd-backend.herokuapp.com/api/users/3', userData);
//     updateUser(data);
//     } catch (error) {
//     console.log(error);
//     }
// };

const INITIAL_STATE = {
    user : {
        // user: {
        //     id: null,
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // }
        id: null,
        firstName: '',
        lastName: '',
        email: ''
    },
    host: {
        // host info
    }
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, ...action.payload }
        case CREATE_USER:
            return { ...state, ...action.payload }
        case UPDATE_USER:
            alert(JSON.stringify(action.payload));
            return { ...state, user: action.payload }
        default:
            return state;
    }
}
