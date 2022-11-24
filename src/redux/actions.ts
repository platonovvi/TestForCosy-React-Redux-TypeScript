import {
    JOKE_CREATE,
    JOKE_DELETE,
    JOKES_LOAD,
    JOKE_LIKE,

    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,

    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF,

    OPEN_SELECTED, JokeCreateType, JokeLikeType, JokeDeleteType
} from "./types";


export function jokeCreate(text: string, id: string, like: boolean, id_joke: number): JokeCreateType {
    return {
        type: JOKE_CREATE,
        data: {text, id, like, id_joke}
    }
}

export function jokeLike(id: string, like: boolean): JokeLikeType {
    return {
        type: JOKE_LIKE,
        data: {id, like}
    };
}

export function jokeDelete(id: string, id_joke: number): JokeDeleteType {
    return {
        type: JOKE_DELETE,
        data: {id, id_joke}
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

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}

export function openSelected() {
    return {
        type: OPEN_SELECTED,
    }
}

export function jokesLoad(){
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch('https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten');
            //const response = await fetch('https://official-jokeapi.appspot.com/jokes/programming/ten');
            const jsonData = await response.json();
            const jsonDataLike = jsonData.map((item) => {
                return {...item, like: false, added: false}
            });
            dispatch({
                type: JOKES_LOAD,
                data: jsonDataLike
            });
            dispatch(loaderOff());
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }
}