import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar  from '../components/navbar/Navbar'
import Routes from '../components/routes/Routes'
import History from '../components/routes/History'
import Footer from '../screen/footer/footer'
import InitSDK from '../components/external_scripts/InitSDK'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <Router history={History}>
            <InitSDK />
            <NavBar />
            <Routes />
            <Footer />
        </Router>
    )
}

export default App