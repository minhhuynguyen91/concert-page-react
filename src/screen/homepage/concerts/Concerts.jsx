import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../../api/v1/index'
import Carousel from 'react-bootstrap/Carousel'

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
      <div className="container text-center my-5">
        <ConcertHeaderTitle> Vở diễn sắp trình diễn </ConcertHeaderTitle>
        <Carousel> 
          {
            this.state.concerts.map((concert, index) => (
              <Carousel.Item key={index}>
                <img src={concert.img_link} />
              </Carousel.Item>
            ))
          }
        </Carousel>  
    
      </div>
    )
  }
}

export default HomeConcert;