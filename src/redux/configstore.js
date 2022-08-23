import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Main from "./Modules/PageModules/Main";


const rootReducer = combineReducers({Main});
const store = configureStore({ reducer: rootReducer });

export default store;