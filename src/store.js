import { createStore, combineReducers } from "redux";
import ShopReducer from "./reducers/ShopReducer";
import AuthReducer from "./reducers/AuthReducer";

const store = createStore(combineReducers({shop:ShopReducer,auth:AuthReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;