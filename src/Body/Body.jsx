import React from 'react';
import Jokes from "./Jokes/Jokes";
import SelectedContainer from "./Selected/SelectedContainer";


const Body = (props) => {
    if (props.jokes.length === 0) {
        props.Refresh();
    }
    return (
        <div className='body'>
            {props.open && <SelectedContainer openSelected={props.openSelected}/>}
            <div className="wrap-jokes">
                <Jokes props={props}/>
                <div className="button-refresh">
                    <button onClick={props.Refresh}>Обновить</button>
                    <button onClick={props.openSelected}>Избранное</button>
                </div>
            </div>
        </div>
    )
}
export default Body;