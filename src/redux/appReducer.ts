import {LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF, OPEN_SELECTED} from './types';

const initialState = {
    loading: false,
    error: null as string | null,
    openSelected: false
}

export type InitialStateType = typeof initialState;
export const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loading: true,
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