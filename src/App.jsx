import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { SideBarMenu } from './components/SideBarMenu';

import './App.css';


export const App = () => {
    return(
        <div className="main-container">
            <BrowserRouter>
                <SideBarMenu></SideBarMenu>
                <MainContent></MainContent>
            </BrowserRouter>
        </div>  
    )
}