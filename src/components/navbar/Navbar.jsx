import React, { Component } from 'react'
import styled from 'styled-components'

import {Logo, LogoLargeScreen} from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light ',
})`
    background-color: #f1f1f1;    
    text-transform: capitalize;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <LogoLargeScreen />
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </div>
        )
    }
}

export default NavBar