import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../../api/v1/index'
import Carousel from 'react-bootstrap/Carousel'

import './concert.css'
//import leftArrow from '../../../components/img/left-arrow.png'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const ConcertHeaderTitle = styled.h2.attrs({
  className: 'h1-responsive font-weight-bold my-5'
})`
  text-transform: uppercase;
`


class HomeConcert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllConcerts()
      .then(concerts => {
        this.setState({
          concerts: concerts.data.data,
          isLoading: false
        })
      })

      .catch(err => {
        console.log(err);
      });

  }

  render() {
    var concertCounter = 0;
    return(
      <div className="text-center my-5">
        <Container>
          <ConcertHeaderTitle> Vở diễn sắp trình diễn </ConcertHeaderTitle>
          
            <Carousel indicators={true}> 
              {
                this.state.concerts.map((concert, index) => (
                  <Carousel.Item key={index}>
                    <Link to={"/concerts/" + concert._id}>
                      <Card className='border-0'>
                        <Card.Img variant="top" src={concert.img_link} className="concert-img-card-display" />
                        <Card.Body>
                          <Card.Title> {concert.title} </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Carousel.Item>
                ))
              }
            </Carousel>
        </Container>
      </div>
    )
  }
}

export default HomeConcert;