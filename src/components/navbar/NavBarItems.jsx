import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'

const NavBarItem = styled.div.attrs({
  className: 'nav-item',
})`
  padding-left: 2em;
  padding-right: 2em;

  :hover {
    border-style: solid;
    color: red;
  }
`

class NavBarItems extends Component {
  render() {
    return(
      <div> 
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav ml-auto">
              <NavBarItem>
                <Link to="/" className="nav-link"> Trang Chủ </Link>
              </NavBarItem>
              <NavBarItem>
                <Link to="/contact" className="nav-link"> Giới thiệu </Link>
              </NavBarItem>
              <NavBarItem>
                <Link to="/concerts" className="nav-link"> Vở diễn </Link>
              </NavBarItem>

              <NavBarItem>
                <Link to="/commencedDates" className="nav-link"> Lịch Diễn </Link>
              </NavBarItem>
            </ul>
        </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}


export default NavBarItems