import React, { Component } from 'react'
import styled from 'styled-components'

import {Logo, LogoLargeScreen} from './Logo'
import Links from './Links'
import NavBarItems from './NavBarItems'

import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const DesktoporTablet = ({children} ) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return (isDesktop | isTablet) ? children : null

}

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light ',
})`
    background-color: #f1f1f1;    
    text-transform: capitalize;
`
const SpacingLine = styled.div.attrs({
    className: 'spacing.pb-1'
})``

class NavBar extends Component {
    render() {
        return (
            <div>
                <DesktoporTablet>
                    <LogoLargeScreen />     
                </DesktoporTablet>

                <Nav>
                    <Mobile>
                        <Logo />
                    </Mobile>
                    
                    <NavBarItems />
                </Nav>
                <SpacingLine />
            </div>

        )
    }
}

export default NavBar