import { combineReducers } from "redux";

import TodoReducers from './todo.reducers';

export default combineReducers({
    todos: TodoReducers
})