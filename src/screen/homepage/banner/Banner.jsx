import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bannerImg from '../../../images/banner_image.jpg'
import api from '../../../api/v1/index'

// import { ConcertData } from '../data/getAllConcert'

// console.log(ConcertData)

const BannerImage = styled.img.attrs({
  className: 'img-fluid'
})``

const ConcertMarqueeImage = styled.img.attrs({
})`
  height: 20vw;
  object-fit: cover;
  display: inline-block;
  padding: 1vw;
`

class HomeBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts: [],
      isLoading: false,
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
    return(
      <div className="container">
        <BannerImage src={bannerImg} />


        <marquee behavior="scroll" scrollamount="18">
          
          {
            this.state.concerts.map((concert, index) => (
              <Link to={"concerts/" + concert._id} key={index} >
                <ConcertMarqueeImage src={concert.img_link} />
              </Link>
            ))
          }
        </marquee>
      </div>
    )
  }

}

export default HomeBanner;