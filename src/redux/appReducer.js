import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF, OPEN_SELECTED} from './types';

const intialState = {
    loading: false,
    error: null,
    openSelected: null
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
        case ERROR_DISPLAY_ON:
            return {
                ...state,
                error: action.text
            }
        case ERROR_DISPLAY_OFF:
            return {
                ...state,
                error: null
            }
        case OPEN_SELECTED:
            return {
                ...state,
                openSelected: !state.openSelected
            }
        default:
            return state;
    }
}