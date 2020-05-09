import React, { Component } from 'react'
import styled from 'styled-components'

import HomeBanner from './banner/Banner' 
import HomeConcert from './concerts/Concerts'
import HomeCommencedDates from './commencedDates/HomeCommencedDates'
import HomeConcertNews from './concertNews/HomeConcertNews'
import HomeArtist from './artists/HomeArtist'
import HomeConcertVideos from './concertVideos/concertVideos'


class HomePage extends Component {
  render() {
    return(
      <div>
        <HomeBanner />
        <HomeConcert />
        <HomeCommencedDates />
        <HomeConcertNews />
        <HomeConcertVideos />
        <HomeArtist />
      </div>
    )
  }

}


export default HomePage;