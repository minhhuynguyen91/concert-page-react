import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../../logo.jpg'


const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

const LogoLarge = styled.div.attrs({
  className: 'logo-large-screen text-center pb-1 pt-1'
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} width="50" height="50" />
            </Wrapper>
        )
    }
}

class LogoLargeScreen extends Component {
  render() {
    return (
      <LogoLarge>
        <img src={logo} width="50" height="50" />
      </LogoLarge>
    )
  }
}

export {Logo, LogoLargeScreen}