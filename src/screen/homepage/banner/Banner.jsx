import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bannerImg from '../../../images/banner_image.jpg'
import api from '../../../api/v1/index'

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

    this.MarqueeList = [];
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllConcerts()
      .then(concerts => {
        this.setState({
          concerts: concerts,
          isLoading: false
        })

        for(var i=0 ; i<this.state.concerts.data.data.length ;i++) {
          this.MarqueeList.push(<ConcertMarqueeImage src={this.state.concerts.data.data[i].img_link} key={i} />)
        }
        console.log(this.state.concerts.data.data);
        console.log(this.MarqueeList)

      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <div className="container">
        <BannerImage src={bannerImg} />
        <marquee behavior="scroll" scrollamount="18" onmouseover="this.stop();" onmouseout="this.start();">
          {this.MarqueeList}
        </marquee>
      </div>
    )
  }

}

export default HomeBanner;