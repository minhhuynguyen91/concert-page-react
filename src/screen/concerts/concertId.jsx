import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../api/v1/index'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {withRouter} from 'react-router';

import './concert.css'
import marked from 'marked'

import moment from 'moment'

const ConcertTitle = styled.h1.attrs({
  className: 'text-center pt-2 pb-2'
})`
  text-transform: capitalize
`

const ConcertNote = styled.div.attrs({
  className: 'pt-2'
})``

const ConcertSeatTitle = styled.h2.attrs({
  className: 'text-center pt-2 pb-2'
})`
  text-transform: capitalize
`

const SeatImg = styled.img.attrs({
  className: 'pt-2 d-flex justify-content-center'
})`
  width: 100%;
`

class ConcertId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concertIdData: [],
      markdownContent: "",
      commencedDates: "",
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getConcertById(this.props.match.params.id)
      .then(concertIdData => {
        this.setState({
          concertIdData: concertIdData.data.data[0],
          markedDownHtml: this.getMarkdowntext(concertIdData.data.data[0].content),
          commencedDates: this.extractCommencedDates(concertIdData.data.data[0]),
          isLoading: false
        })
        
      })

      .catch(err => {
        console.log(err);
      });
  }

  extractCommencedDates(srcInput) {
    // console.log(srcInput.commenceddatesDetails);
    var commencedList = ""
    if (srcInput.commenceddatesDetails.length == 0) {
      commencedList = "Xuất diễn: HIỆN TẠI CHƯA CÓ XUẤT DIỄN"
      // return {__html : "Xuất diễn: HIỆN TẠI CHƯA CÓ XUẤT DIỄN" }
    } else {
      commencedList = "<ul>"
      srcInput.commenceddatesDetails.forEach(e => 
        commencedList = commencedList + "<li>" + e.start_time + " - "+ moment(e.start_date).format('DD/MM/YYYY') + "</li>"
      )
      commencedList = commencedList + "</ul>"
    }
    return commencedList
  }  

  getMarkdowntext(markdownText) {
    // console.log(markdownText)
    var rawInput = marked(markdownText, {sanitize: true})
    return {__html : rawInput}
  }

  render() {
    return(
      <Container>
        <Row>
          <Col lg={12} sm={12}>
            <img src={this.state.concertIdData.img_link} className="concert-photo" /> 
          </Col>

          <Col lg={12} sm={12}>
            <ConcertTitle> {this.state.concertIdData.title} </ConcertTitle>
            <ConcertNote> Số ghế: {this.state.concertIdData.tickets} </ConcertNote>

            <ConcertNote> Thể loại: {this.state.concertIdData.note}  </ConcertNote>
            
            <ConcertNote dangerouslySetInnerHTML={{ __html: this.state.commencedDates}}/> 
          </Col>
        </Row>

        <Row>
          <Col lg={12} sm={12}>
            <h2> Nội Dung </h2>
          </Col>

          <Col lg={12} sm={12} className="pt-2">
            <div dangerouslySetInnerHTML={this.state.markedDownHtml} />
          </Col>

          <Col lg={12} sm={12} className="pt-2">
            <ConcertSeatTitle className="text-center"> Sơ đồ ghế ngồi </ConcertSeatTitle>
          </Col>

          <Col lg={12} sm={12}>
            <SeatImg  src={this.state.concertIdData.seat_image_url != "" ? this.state.concertIdData.seat_image_url : "https://via.placeholder.com/700x500"} />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default  withRouter(ConcertId);