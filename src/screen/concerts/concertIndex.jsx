import React, {Component} from 'react'
import styled from 'styled-components'
import api from '../../api/v1/index'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'


import './concert.css'
class ConcertIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concertIndex: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllConcerts()
      .then((concerts) => {
        this.setState({
          concertIndex: concerts.data.data,
          isLoading: false
        })
      })

      .catch((err) => {
        this.setState({
          isLoading: false,
          concertIndex: err
        })
      });
  }

  render() {
    return(
      <Container>
        <Row>
          {
            this.state.concertIndex.map((concert, index) => (
              <Col sm={12} xs={12} md={6} lg={6} key={index}>
                <Link to={"/concerts/" + concert._id}>
                  <Card className="border-0 mt-2">
                    <Card.Img variant="top" src={concert.img_link} className="concert-img-card-display" />

                    <Card.Body>
                      <Card.Title className="text-center concert-title"> {concert.title} </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}


export default ConcertIndex;