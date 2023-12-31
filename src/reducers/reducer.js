import { combineReducers } from "redux";
import nameReducer from "../app/nameReducer";
import todosReducer from "../app/todoReducer";
import dateReducer from "../app/dateReducer";

const rootReducer = combineReducers({
  name: nameReducer,
  todos: todosReducer,
  date: dateReducer,
});

export default rootReducer;
