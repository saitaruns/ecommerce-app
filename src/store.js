import { createStore } from "redux";
import ShopReducer from "./reducers/ShopReducer";

const store = createStore(ShopReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;