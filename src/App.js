import React from 'react';
import {useSelector} from "react-redux";
import './App.scss';
import mainImage from './main-image.jpg';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';

function App() {
    const error = useSelector(state => state.appReducer.error);
    return (
        <div className="App">
            <div className="wrap">
                <Spin/>
                <div className="card">
                    {error && (<div className='error-massage'>
                        {error}
                    </div>)}
                    <div className="card-image">
                        <img src={mainImage} alt="surfing"></img>
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    );
}

export default App;