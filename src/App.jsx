import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { MenuHeader } from './components/MenuHeader';

import './App.css';


export const App = () => {
    return(
        <div className="main-container">
            <BrowserRouter>
                <MenuHeader />
                <MainContent />
            </BrowserRouter>
        </div>  
    )
}