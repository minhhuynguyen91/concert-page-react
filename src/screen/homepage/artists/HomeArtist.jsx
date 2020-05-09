import React, { Component } from 'react'
import styled from 'styled-components'

import api from '../../../api/v1/index'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './artist.css'

const ArtistTitle = styled.h2.attrs({
  className: 'text-center pt-2 pb-4'
})`
  text-transform: uppercase
`

const ArtistImg = styled.img.attrs({
  className: 'rounded-circle artist-thumbnail-avatar d-flex justify-content-center card-img-top'
})``

const ArtistName = styled.p.attrs({
})`
  text-align: center;
  text-transform: uppercase;
`

class HomeArtist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllArtist()
      .then(getAllArtist => {
        this.setState({
          artists: getAllArtist.data.data,
          isLoading: false
        })
        
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <Container>
        <Row>
          <Col sm={12} lg={12}> 
            <ArtistTitle> Nghệ sĩ nhà hát </ArtistTitle> 
          </Col>
        </Row>
        <Row>
          {
            this.state.artists.map((artist, index) => (
              <Col lg={4} md={4} xs={6} sm={6} key={index}>
                <Link to={"/artists/" + artist._id}>
                  <div className="card border-0">
                    <ArtistImg src={artist.profile_img_link} />
                    <div className="card-body">
                      <ArtistName> {artist.name} </ArtistName>
                    </div>
                  </div>
                </Link>
              </Col>
            ))
          }
          
        </Row>
      </Container>
    )
  }

}

export default HomeArtist;