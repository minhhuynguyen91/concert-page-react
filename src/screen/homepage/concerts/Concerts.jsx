import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../../api/v1/index'

const ConcertHeaderTitle = styled.h2.attrs({
  className: 'h1-responsive font-weight-bold my-5'
})`
  text-transform: uppercase;
`
const CarouselItemActive = styled.div.attrs({
  className: 'carousel-item active'
})``

const CarouselItemInactive = styled.div.attrs({
  className: 'carousel-item'
})``

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
        // console.log(this.state.concerts);
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
        <div id="carouselConcerts" className="carousel slide" data-ride='carousel'>
          <div className="carousel-inner" role="listbox">  

            {
              this.state.concerts.map((concert, index) => (
                
                <img src={concert.img_link} key={index} />
              ))
            }
          </div>
        </div>  
    
      </div>
    )
  }
}

export default HomeConcert;