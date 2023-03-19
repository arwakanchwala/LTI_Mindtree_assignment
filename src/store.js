// src/store.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer"; 
import eventReducer from "./reducer/eventReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
