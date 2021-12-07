import axios from 'axios';

// ACTION TYPES
const GET_TAGS = 'GET_TAGS';

// ACTION CREATORS
const getTags = (tags) => {
  return {
    type: GET_TAGS,
    tags
  }
}

// THUNKS
export const fetchTags = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('https://tagd-backend.herokuapp.com/api/tags')
      dispatch(getTags(data))
    } catch (error) {
      console.log(error);
    }
  }
}

export default function tagReducer(state = {}, action) {
  switch (action.type) {
    case GET_TAGS:
      return action.tags
    default:
      return state;
  }
}
