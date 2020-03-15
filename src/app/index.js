import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar  from '../components/navbar/Navbar'
import HomePage from '../screen/homepage/index'

// import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
              <Route path="/" extract component={HomePage} />
            </Switch>
        </Router>
    )
}

export default App