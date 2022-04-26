import {combineReducers} from "redux";
import {likesReducer} from './likesReducer';
import {jokesReducer} from './jokesReducer';
import {appReducer} from './appReducer';

export const rootReducer = combineReducers({
    likesReducer,
    jokesReducer: jokesReducer,
    appReducer,
});