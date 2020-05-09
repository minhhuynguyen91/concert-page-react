import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../../api/v1/index'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import './concertNews.css'

const HeaderTitle = styled.h2.attrs({
  className: 'text-center pt-4 mb-4'
})`
  text-transform: uppercase
`

const NewsTitle = styled.h3.attrs({
  className: 'pt-2 d-flex justify-content-center'
})`
`
const ConcertNewsDisplay = styled.div.attrs({
  className: 'd-flex justify-content-center'
})`
`

class HomeConcertNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concertNews: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllConcertNews()
      .then(concertNews => {
        this.setState({
          concertNews: concertNews.data.data,
          isLoading: false
        })
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <Container className="pt-4 mb-4">
        <HeaderTitle> Tin tức nhà hát </HeaderTitle>
        <Carousel indicators={false} interval={false}> 
          {
            this.state.concertNews.map((news, index) => (
              <Carousel.Item key={index}>
                  
                  <Link to={"/concertNews/" + news._id}>
                    <ConcertNewsDisplay>
                      <img src={news.img_link.split(";").filter(String)[0]} className="concert-news-img" />
                    </ConcertNewsDisplay>
                    <NewsTitle> {news.title} </NewsTitle>
                  </Link>
              </Carousel.Item>   
            ))
          }

        </Carousel>
      </Container>
    )
  }
}

export default HomeConcertNews;