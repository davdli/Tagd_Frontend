import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/users";
import tagReducer from "./reducers/tags";

const reducer = combineReducers({
  user: userReducer,
  tag: tagReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })))

const store = createStore(reducer, middleware)

export default store;
export * from './reducers/users';
