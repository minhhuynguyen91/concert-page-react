import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../api/v1/index'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {withRouter} from 'react-router';
import marked from 'marked'

class ArtistId extends Component {
  render() {
    return(
      <Container> Hello bois </Container>
    )
  }
}

export default ArtistId;