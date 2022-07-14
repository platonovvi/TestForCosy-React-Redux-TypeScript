import React from 'react';
import './App.scss';
import Spin from './Spin';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BodyContainer from "./Body/BodyContainer";

const App = () => {
    return (
        <div className="App">
            <Spin className='spinner'/>
            <BodyContainer/>
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/jokes'
                           element={<BodyContainer/>}/>
                    <BodyContainer/>
                </Routes>
            </BrowserRouter>*/}
        </div>
    );
}
export default App;