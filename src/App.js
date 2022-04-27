import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.scss';
import Jokes from './Jokes';
import Selected from './Selected';
import Spin from './Spin';
import {jokesLoad, openSelected} from './redux/actions'

function App() {
    const error = useSelector(state => state.appReducer.error);
    const open = useSelector(state => state.appReducer.openSelected);
    const empty = useSelector(state => state.jokesReducer.selected.length);
    const dispatch = useDispatch();
    const Refresh = () => {
        dispatch(jokesLoad())
    };
    const openModal = () => {
        window.scrollTo(0,0)
        dispatch(openSelected())
    };
    return (
        <div className="App">
            <Spin className='spinner'/>
            <div className='body'>
                {!!open && <div className="wrap-selected">
                    <div className="header">
                        <label>Избранное</label>
                        <div onClick={openModal}>&times;</div>
                    </div>
                    {!empty && <div className="header">
                        <label>Пусто</label>
                    </div>}
                    {error && (<div className='error-massage'>
                        {error}
                    </div>)}
                    <Selected/>
                </div>}
                <div className="wrap-jokes">
                    {error && (<div className='error-massage'>
                        {error}
                    </div>)}
                    <Jokes/>
                    <div className="button-refresh">
                        <button onClick={Refresh}>Обновить</button>
                        <button onClick={openModal}>Избранное</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;