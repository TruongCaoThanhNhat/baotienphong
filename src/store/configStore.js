import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { root } from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({ root });
const enhancers = composeWithDevTools({});
export const store = configureStore({ reducer, enhancers });
// const reducer = combineReducers({
//     counter: counterSlice,
// });

// const store = configureStore({
//     reducer: reducer,
// })

// export default store;


