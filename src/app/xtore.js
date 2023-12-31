import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducer.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
