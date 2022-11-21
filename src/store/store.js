import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducer.js";
import thunk from 'redux-thunk'

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;