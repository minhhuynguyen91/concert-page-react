import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarCollapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

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
        <NavBarCollapse id="#navbarSupportedContent"> 
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
        </NavBarCollapse>
      </div>
    )
  }
}


export default NavBarItems