import {combineReducers} from "redux";
import {jokesReducer} from './jokesReducer';
import {appReducer} from './appReducer.ts';

export const rootReducer = combineReducers({
    jokesReducer: jokesReducer,
    appReducer,
});