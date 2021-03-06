import { createStore } from "redux";
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceReduce from "./icecream/IceReduce";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: IceReduce,
});

const store = createStore(rootReducer);
export default store;
console.log(store.getState());
