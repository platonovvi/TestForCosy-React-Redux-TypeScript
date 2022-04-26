import {JOKE_CREATE, JOKE_UPDATE, JOKE_DELETE, JOKE_LIKE, JOKES_LOAD} from './types';

const intialState = {
    jokes: [],
    selected: []
}
export const jokesReducer = (state = intialState, action) => {
    switch (action.type) {
        case JOKE_CREATE:
            return {
                ...state,
                selected: [...state.selected, action.data]
            }
        case JOKES_LOAD:
            const jokesNew = action.data.map(res => {
                return {
                    text: res.setup + ' ' + res.punchline,
                    id: res.id,
                    like: res.like,
                }
            })
            return {
                ...state,
                jokes: jokesNew
            }

        case JOKE_UPDATE:
            const {data} = action;
            const {jokes} = state;
            const itemIndex = jokes.findIndex(res => res.id === data.id);
            const nextJokes = [
                ...jokes.slice(0, itemIndex),
                data,
                ...jokes.slice(itemIndex + 1)
            ];
            return {
                ...state,
                //jokes: [...state.jokes, action.data]
            }
        case JOKE_LIKE:
            return (() => {
                const {data} = action;
                const {selected} = state;
                console.log(data);
                const itemIndex = selected.findIndex(res => res.id === data.id);

                const nextJokes = [
                    ...selected.slice(0, itemIndex),
                    {...data, like: !data[itemIndex].like},
                    ...selected.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    selected: nextJokes
                }
            })();
        case JOKE_DELETE:
            return (() => {
                const {id} = action;
                const {selected} = state;
                const itemIndex = selected.findIndex(res => res.id === id);

                const nextJokes = [
                    ...selected.slice(0, itemIndex),
                    ...selected.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    selected: nextJokes
                }
            })();
        default:
            return state;
    }
}

