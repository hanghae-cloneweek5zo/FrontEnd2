import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Main from "./Modules/PageModules/Main";
import Review from "./Modules/PageModules/Review";


const rootReducer = combineReducers({Main,Review});
const store = configureStore({ reducer: rootReducer });

export default store;