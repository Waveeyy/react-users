import { createStore, applyMiddleware } from "redux";
import UsersReducer from "../reducer/UsersReducer";
import thunk from "redux-thunk";

let Store = createStore(UsersReducer, applyMiddleware());

export default Store;
