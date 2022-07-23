import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePublica from './components/HomePublica/homePublica';
import Login from './components/Login/index';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePublica/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    )
}

export default Rotas;