import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar  from '../components/navbar/Navbar'
import Routes from '../components/routes/Routes'
import History from '../components/routes/History'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router history={History}>
            <NavBar />
            <Routes />
        </Router>
    )
}

export default App