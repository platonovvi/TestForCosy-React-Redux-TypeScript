import React from 'react';
import './App.scss';
import mainImage from './main-image.jpg';
import Likes from './Likes';
import Title from './Title';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="wrap">
                    <div className="card">
                        <div className="card-image">
                            <img src={mainImage} alt="surfing"></img>
                            <Title/>
                            <Likes/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
