import React from 'react';
import './App.scss';
import mainImage from './main-image.jpg';
import Likes from './Likes';
import title from './title';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="wrap">
                    <div className="card">
                        <div className="card-image">
                            <img src={mainImage} alt="surfing"></img>
                            <Likes/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
