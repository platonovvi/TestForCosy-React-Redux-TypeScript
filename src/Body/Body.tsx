import React from 'react';
import Jokes from "./Jokes/Jokes";
import SelectedContainer from "./Selected/SelectedContainer";
import {JokesType, SelectedType} from "../redux/types";

type Props = {
    Refresh: () => void,
    error: string | null,
    handleCreate: () => void,
    jokes: Array<JokesType>
    selected: Array<SelectedType>,
    open: boolean,
    openSelected: () => void,
}

const Body: React.FC<Props> = (props) => {
    if (props.jokes.length === 0) {
        props.Refresh();
    }
    if (props.jokes.length) {
        return (
            <div className='body'>
                {props.open ? <SelectedContainer openSelected={props.openSelected}/> : ''}
                <div className="wrap-jokes">
                    <Jokes jokes = {props.jokes} handleCreate = {props.handleCreate}/>
                    <div className="button-refresh">
                        <button onClick={props.Refresh}>Обновить</button>
                        <button onClick={props.openSelected}>Избранное</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
export default Body;