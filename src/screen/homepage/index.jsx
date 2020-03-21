import React, { Component } from 'react'
import styled from 'styled-components'

import HomeBanner from './banner/Banner' 
import HomeConcert from './concerts/Concerts'

class HomePage extends Component {
  render() {
    return(
      <div>
        <HomeBanner />
        <HomeConcert />
      </div>
    )
  }

}


export default HomePage;