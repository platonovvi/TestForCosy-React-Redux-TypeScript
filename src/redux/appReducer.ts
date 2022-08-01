import {LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF, OPEN_SELECTED} from './types';

export type InitialStateType = {
    loading: boolean,
    error: string,
    openSelected: boolean,
}

const initialState: InitialStateType = {
    loading: false,
    error: null,
    openSelected: false
}
export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
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