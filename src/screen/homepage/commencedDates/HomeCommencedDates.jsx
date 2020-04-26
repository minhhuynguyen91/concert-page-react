import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../../api/v1/index'
import moment from 'moment'

import './commencedDates.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'


const HeaderTitle = styled.h1.attrs({
  className: 'text-center'
})`
  text-transform: uppercase
`

const SubHeaderTitle = styled.p.attrs({
  className: 'mb-0 text-center mb-5'
})`
`
const TimeLineItem = styled.li.attrs({
  className: 'timeline-item bg-black rounded ml-3 p-4 shadow'
})`
`
const TimeLineTitle = styled.h2.attrs({
  className: 'h5 mb-0 timelines-title'
})`
`

const TimeLineInfo = styled.p.attrs({
  className: 'text-small mt-2'
})`
  text-transform: capitalize;
`

class HomeCommencedDates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commencedDates: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllCommencedDates()
      .then(commencedDates => {
        this.setState({
          commencedDates: commencedDates.data.data,
          isLoading: false
        })
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    moment.locale('vi');
    return(
      <Container>
        <HeaderTitle> Lịch Diễn </HeaderTitle>
        <SubHeaderTitle> Thời gian bắt đầu - Ngày bắt đầu trình diễn </SubHeaderTitle>

        <Row>
          <Col lg={7} className="mx-auto">
            <ul className="timeline">
              {
                this.state.commencedDates.map((commencedDate, index) => (
                  <TimeLineItem key={index}>
                    <div className="timeline-arrow"/>
                    <TimeLineTitle> 
                      <Link to={"/concerts/" + commencedDate.concertDetail[0]._id}> {commencedDate.concertDetail[0].title}
                      </Link>
                      <TimeLineInfo>  
                        {commencedDate.start_time} - {moment(commencedDate.start_date).format('DD/MM/YYYY')} ({moment(commencedDate.start_date).format('dddd')})
                      </TimeLineInfo>
                      <TimeLineInfo> 
                        Số vé : {commencedDate.concertDetail[0].tickets} 
                      </TimeLineInfo>
                      <TimeLineInfo> 
                        Thể loại: {commencedDate.concertDetail[0].note}
                      </TimeLineInfo>
                    </TimeLineTitle>
                  </TimeLineItem>

                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HomeCommencedDates;