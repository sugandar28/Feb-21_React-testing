import { createStore, applyMiddleware } from "redux";
import rootReducer from "Redux/rootReducers";
import reduxPromise from "redux-promise";

function store(initialstate) {
  return createStore(rootReducer, initialstate, applyMiddleware(reduxPromise));
}

export { store };
