import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { SideBarMenu } from './components/SideBarMenu';


export const App = () => {
    return(
        <BrowserRouter>
            <SideBarMenu></SideBarMenu>
            <MainContent></MainContent>
        </BrowserRouter>

        
    )
}