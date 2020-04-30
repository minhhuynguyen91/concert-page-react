import React, { Component } from 'react'
import styled from 'styled-components'

import HomeBanner from './banner/Banner' 
import HomeConcert from './concerts/Concerts'
import HomeCommencedDates from './commencedDates/HomeCommencedDates'
import HomeConcertNews from './concertNews/HomeConcertNews'

class HomePage extends Component {
  render() {
    return(
      <div>
        <HomeBanner />
        <HomeConcert />
        <HomeCommencedDates />
        <HomeConcertNews />
      </div>
    )
  }

}


export default HomePage;