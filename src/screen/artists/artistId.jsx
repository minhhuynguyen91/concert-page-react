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

import './artist.css'

const ArtistName = styled.h2.attrs({
  className: 'pt-2 pb-2'
})`
  text-align: center;
  text-transform: uppercase;
`

const ArtistImg = styled.img.attrs({
  className: 'artist-profile-image img-fluid rounded mx-auto d-block'
})``

class ArtistId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistIdData: [],
      markdownContent: "",
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getArtistById(this.props.match.params.id)
      .then(artistIdData => {
        this.setState({
          artistIdData: artistIdData.data.data,
          markedDownHtml: this.getMarkdowntext(artistIdData.data.data.bio),
          isLoading: false
        })
        
      })

      .catch(err => {
        console.log(err);
      });
  }

  getMarkdowntext(markdownText) {
    var rawInput = marked(markdownText, {sanitize: true})
    return {__html : rawInput}
  }

  render() {
    return(
      <Container>
        <ArtistName> {this.state.artistIdData.name} </ArtistName>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="text-center">
            <ArtistImg src={this.state.artistIdData.profile_img_link} />

          </Col>
        </Row>
        <div className="mt-5" dangerouslySetInnerHTML={this.state.markedDownHtml}/>
      </Container>
    )
  }
}

export default withRouter(ArtistId);