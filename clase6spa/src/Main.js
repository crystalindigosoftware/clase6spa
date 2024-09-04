import React, {Component} from "react";
import {Route, NavLink, HashRouter, Routes } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';


class Main extends Component{
render(){
    return(
        <HashRouter>
            <div className='header'>
                <h2>Ejemplo SPA Vates</h2>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/stuff'>Stuff</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>

                <div className='content'>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/stuff" element={<Stuff/>} />
                        <Route exact path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}
}

export default Main;