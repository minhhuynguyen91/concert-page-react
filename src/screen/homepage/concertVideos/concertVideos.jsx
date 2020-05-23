import React, { useState, useEffect, Component } from 'react';

import styled from 'styled-components'
import api from '../../../api/v1/index'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
const fbSDK = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=369648133723010&autoLogAppEvents=1`

const ConcertVideoTitle = styled.h2.attrs({
  className: 'text-center pt-4 mb-4'
})``

const VideoStyle = styled.div.attrs({
  className: 'pt-2 d-flex justify-content-center'
})``

const VideoTitle = styled.h3.attrs({
  className: 'text-center'
})``

const SrcParsing = (srcInput) => {
  // console.log(srcInput.srcInput)
  // // console.log(url)
  // console.log(srcInput)
  // console.log(srcInput.srcInput)
  if(srcInput.srcInput.srcType == "Youtube") {
    return(<iframe width="250" height="315" src={srcInput.srcInput.url} allowFullScreen />)
  }
  else {
    return(
      <div className="fb-video" data-href={srcInput.srcInput.url} data-width='250' data-height='315' data-show-text='false' data-allowfullscreen='true'>
        <div className="fb-xfbml-parse-ignore"> </div>
      </div>)
  }
}

const VideoRender = () => {
  const [videos, setVideos] = useState([])
  const [err, setErr] = useState('')
  const [load, setLoad] = useState(false);

  useEffect(() => {
    api.getAllVideos()
      .then((concertVideos) => {
        setVideos(concertVideos.data.data)
        setLoad(true)
      })

      .catch((err) => {
        setErr(err.message);
        setLoad(true)
      });

  }, [])

  if (load) {
    return(
      <div>
        <Carousel interval={false} indicators={true}>
          {
            videos.map((video, index) => (
              <Carousel.Item key={index}>
                <VideoStyle>
                  <SrcParsing srcInput={video} />
                </VideoStyle>
                <VideoTitle> {video.title}</VideoTitle>
              
              </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  } 

  else {
    return (<div> Loading..... </div>)
  }

}

const HomeConcertVideos = () => {
  return( 
      <Container fluid="sm">
        <ConcertVideoTitle> Video </ConcertVideoTitle>
        <VideoRender />
      </Container>
  )
}

export default HomeConcertVideos