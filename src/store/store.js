import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./rootReducers";

const initialState = {};
const middleware = [thunk, logger];

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;