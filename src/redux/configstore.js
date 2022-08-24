import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Main from './Modules/PageModules/Main';
import Review from './Modules/PageModules/Review';
import Detail from './Modules/PageModules/Detail';
import Category from './Modules/PageModules/Category';

const rootReducer = combineReducers({ Main, Review, Detail, Category });
const store = configureStore({ reducer: rootReducer });

export default store;
