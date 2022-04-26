import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from './types';

const intialState = {
    loading: false,
}
export const appReducer = (state = intialState, action) => {
    switch(action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loading: true
            }
        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}