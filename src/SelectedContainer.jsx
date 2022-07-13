import React from 'react';
import {jokeDelete, jokeLike} from './redux/actions'
import {connect} from "react-redux";
import Selected from "./Selected";

let mapStateToProps = (state) => {
    return {
        selected: state.jokesReducer.selected,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleLike: (id, like) => e => {
            e.preventDefault();
            dispatch(jokeLike(id, like));
        },
        handleDelete: (id, id_joke) => e => {
            e.preventDefault();
            dispatch(jokeDelete(id, id_joke));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selected);