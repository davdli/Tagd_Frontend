import axios from 'axios';

// ACTION TYPES
const GET_TAGS = 'GET_TAGS';
const CREATE_TAG = "CREATE_TAG"
// ACTION CREATORS
const getTags = (tags) => {
  return {
    type: GET_TAGS,
    tags
  }
}

const createTags = (tag) => {
  return {
    type: CREATE_TAG,
    tag
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

export const createTag = (locationID) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`https://tagd-backend.herokuapp.com/api/tags/${locationID}`)
      dispatch(createTags(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function tagReducer(state = {}, action) {
  switch (action.type) {
    case GET_TAGS:
      return action.tags
    case CREATE_TAG:
      return Object.assign({}, state, action.tag)
    default:
      return state;
  }
}
