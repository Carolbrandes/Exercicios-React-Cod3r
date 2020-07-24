import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import Todo from '../Todo/Todo'
import About from '../About/About'

export default props => (
    <Router>
        <Route path='/Todos' component={Todo}/>
        <Route path='/About' component={About}/>
        <Redirect from='*' to='/Todos'/>
    </Router>
)