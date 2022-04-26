import {
    INCREMENT,
    DECREMENT,
    JOKE_CREATE,
    JOKE_UPDATE,
    JOKE_LIKE,
    JOKE_DELETE,
    JOKES_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF,

    OPEN_SELECTED
} from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function jokeCreate(text, id, like) {
    return {
        type: JOKE_CREATE,
        data: {text, id, like}
    }
}

export function jokeUpdate(text, id) {
    return {
        type: JOKE_UPDATE,
        data: {text, id}
    }
}

export function jokeLike(id, like) {
    return {
        type: JOKE_LIKE,
        id, like
    };
}
export function jokeDelete(id) {
    return {
        type: JOKE_DELETE,
        id
    };
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return {
        type: ERROR_DISPLAY_ON,
        text
    }
}
export function openSelected() {
    return {
        type: OPEN_SELECTED,
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}

export function jokesLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch('https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten');
            //const response = await fetch('https://official-jokeapi.appspot.com/jokes/programming/ten');
            const jsonData = await response.json();
            const jsonDataLike = jsonData.map((item) => {return {...item, like:false}});
            dispatch({
                type: 'JOKES_LOAD',
                data: jsonDataLike
            });
            dispatch(loaderOff());
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }
}