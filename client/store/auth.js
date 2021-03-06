import axios from "axios";

const TOKEN = "token";

//ACTION TYPES

const SET_AUTH = "SET_AUTH";
const UPDATE_USER = "UPDATE_USER";


//ACTION CREATORS

const setAuth = auth => ({ type: SET_AUTH, auth });

//THUNK CREATORS

export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate = (user, method) => async dispatch => {
  try {
    let res = null;
    if (method === "login") {
      res = await axios.post(`/auth/${method}`, {
        email: user.email,
        password: user.password,
      });
    } else {
      res = await axios.post(`/auth/${method}`, user);
    }
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: {},
  };
};

//REDUCER

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state;
  }
}
