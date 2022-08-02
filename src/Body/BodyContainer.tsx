import React from 'react';
import {jokeCreate, jokesLoad, openSelected} from '../redux/actions'
import {connect} from "react-redux";
import Body from "./Body";
import {AppStateType} from "../redux/rootReducer";
import {JokesType, SelectedType} from "../redux/types";


type mapStateToPropsType = {
    open: boolean,
    error: string | null,
    jokes: Array<JokesType>,
    selected: Array<SelectedType>,
}
type mapDispatchToPropsType = {
    Refresh: () => void,
    openSelected: () => void,
    handleCreate: (jokeText: string, id: string, like: boolean, id_joke: number) => void,
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        open: state.appReducer.openSelected,
        error: state.appReducer.error,
        jokes: state.jokesReducer.jokes,
        selected: state.jokesReducer.selected,
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        Refresh: () => {
            window.scrollTo(0, 0);
            dispatch(jokesLoad());
        },
        openSelected: () => {
            window.scrollTo(0, 0);
            dispatch(openSelected());
        },
        handleCreate: (jokeText, id, like, id_joke) => e => {
            e.preventDefault();
            dispatch(jokeCreate(jokeText, id, like, id_joke));
        },
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType>(mapStateToProps, mapDispatchToProps)(Body);