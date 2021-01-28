import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { About } from './About/About'
import { Contact } from './Contact/Contact'
import { Projects } from './Projects/Projects'
import { Home } from './Home/Home'
import { NotFound } from './NotFound'


export const Routes = () => {
    return(
        <div>
            <h1>Alô</h1>
            <Switch>
                <Route exact path="/about">
                    <About></About>
                </Route>
                <Route exact path="/contact">
                    <Contact></Contact>
                </Route>
                <Route exact path="/projects">
                    <Projects></Projects>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>   
        </div>
    )
}