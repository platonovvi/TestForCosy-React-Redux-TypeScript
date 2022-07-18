import {JOKE_CREATE, JOKE_DELETE, JOKES_LOAD, JOKE_LIKE} from './types';
//localStorage.clear();
const initialState = {
    jokes:  [],
    selected: JSON.parse(localStorage.getItem('jokesSelected')) || []
}
export const jokesReducer = (state = initialState, action) => {

    switch (action.type) {
        case JOKE_CREATE:
            const itemIndex = state.jokes.findIndex(res => res.id === action.data.id_joke);
            const nextJokes = [
                ...state.jokes.slice(0, itemIndex),
                {...state.jokes[itemIndex], added: !state.jokes[itemIndex].added},
                ...state.jokes.slice(itemIndex + 1)
            ];
            localStorage.setItem('jokesSelected', JSON.stringify([...state.selected, action.data]))
            return {
                ...state,
                selected: [...state.selected, action.data],
                jokes: [...nextJokes],
            }
        case JOKES_LOAD:
            const jokesNew = action.data.map(res => {
                return {
                    text: res.setup + ' ' + res.punchline,
                    id: res.id,
                    like: res.like,
                    added: res.added,
                }
            })
            return {
                ...state,
                jokes: jokesNew
            }
        case JOKE_LIKE:
            return (() => {
                const {data} = action;
                const {selected} = state;
                const itemIndex = selected.findIndex(res => res.id === data.id);
                const nextJokes = [
                    ...selected.slice(0, itemIndex),
                    {...selected[itemIndex], like: !selected[itemIndex].like},
                    ...selected.slice(itemIndex + 1)
                ];

                localStorage.setItem('jokesSelected', JSON.stringify(nextJokes))
                return {
                    ...state,
                    selected: nextJokes,
                }
            })();
        case JOKE_DELETE:
            return (() => {
                const {data} = action;
                const {selected} = state;

                const itemIndex = selected.findIndex(res => res.id === data.id);
                const nextJokes = [
                    ...selected.slice(0, itemIndex),
                    ...selected.slice(itemIndex + 1)
                ];
                const itemIndex2 = state.jokes.findIndex(res => res.id === action.data.id_joke);

                let nextJokes2 = [...state.jokes];
                if(itemIndex2 >= 0) {
                    nextJokes2 = [
                        ...state.jokes.slice(0, itemIndex2),
                        {...state.jokes[itemIndex2], added: !state.jokes[itemIndex2].added},
                        ...state.jokes.slice(itemIndex2 + 1)
                    ];
                }

                localStorage.setItem('jokesSelected', JSON.stringify(nextJokes))
                return {
                    ...state,
                    selected: nextJokes,
                    jokes: nextJokes2
                }
            })();
        default:
            return state;
    }
}

