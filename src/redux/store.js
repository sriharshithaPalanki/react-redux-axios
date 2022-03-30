import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import detailsReducer from "./details/detailsReducer";

const store = createStore(
  detailsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
