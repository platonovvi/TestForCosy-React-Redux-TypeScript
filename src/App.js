import React from 'react';
import './App.scss';
import mainImage from './main-image.jpg';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="wrap">
                    <Spin/>
                    <div className="card">
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
}
