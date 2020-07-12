import React, { Component } from 'react'

import HomeBanner from './banner/Banner' 
import HomeConcert from './concerts/Concerts'
import HomeCommencedDates from './commencedDates/HomeCommencedDates'
import HomeConcertNews from './concertNews/HomeConcertNews'
import HomeArtist from './artists/HomeArtist'
import HomeConcertVideos from './concertVideos/concertVideos'
import Testimony from './testimony/Testimony'

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
        <Testimony />
      </div>
    )
  }

}


export default HomePage;