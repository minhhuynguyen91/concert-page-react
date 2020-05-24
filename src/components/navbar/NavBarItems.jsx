import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './navbar.css'

const NavBarItem = styled.li.attrs({
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
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="nav-link"> Trang Chủ </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="nav-link"> Giới thiệu </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/concerts" className="nav-link "> Vở diễn </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/commencedDates" className="nav-link"> Lịch Diễn </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}


export default NavBarItems