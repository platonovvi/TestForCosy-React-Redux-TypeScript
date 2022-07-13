import React from 'react';
import {jokeCreate, jokesLoad, openSelected} from './redux/actions'
import {connect} from "react-redux";
import Body from "./Body";

let mapStateToProps = (state) => {
    return {
        open: state.appReducer.openSelected,
        error: state.appReducer.error,
        jokes: state.jokesReducer.jokes,
        selected: state.jokesReducer.selected,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Refresh: () => {
            window.scrollTo(0,0);
            dispatch(jokesLoad());
        },
        openSelected: () => {
            window.scrollTo(0,0);
            dispatch(openSelected());
        },
        handleCreate: (jokeText, id, like, id_joke) => e => {
            e.preventDefault();
            dispatch(jokeCreate(jokeText, id, like, id_joke));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);