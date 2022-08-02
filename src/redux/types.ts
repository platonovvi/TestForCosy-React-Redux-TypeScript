
export const JOKE_CREATE = 'JOKE_CREATE';
export const JOKE_LIKE = 'JOKE_LIKE';
export const JOKE_DELETE = 'JOKE_DELETE';
export const JOKES_LOAD = 'JOKES_LOAD';

export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export const ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON';
export const ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF';

export const OPEN_SELECTED = 'OPEN_SELECTED';

export type JokesType = {
    text: string, id: number, like: boolean, added: boolean
}
export type SelectedType = {
    text: string, id: string, like: boolean, id_joke: number
}
export type PropsType = {
    jokes:Array<JokesType>,
    selected:Array<SelectedType>,
    openSelected: boolean
}

export type JokeCreateDataType = {
    text: string, id: string, like: boolean, id_joke: number
}
export type JokeCreateType = {
    type: typeof JOKE_CREATE,
    data: JokeCreateDataType
}

export type JokeLikeDataType = {
    id: string, like: boolean
}
export type JokeLikeType = {
    type: typeof JOKE_LIKE,
    data: JokeLikeDataType
}

export type JokeDeleteDataType = {
    id: string, id_joke: number
}
export type JokeDeleteType = {
    type: typeof JOKE_DELETE,
    data: JokeDeleteDataType
}