import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../api/v1/index'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {withRouter} from 'react-router';

class ConcertId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concertId: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    console.log(this.props)
    await api.getConcertById(this.props.match.params.id)
      .then(concertNews => {
        this.setState({
          concertNews: concertNews.data.data,
          isLoading: false
        })
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props)
    return(
      <div> Hello bois
      </div>
    )
  }
}

export default  withRouter(ConcertId);