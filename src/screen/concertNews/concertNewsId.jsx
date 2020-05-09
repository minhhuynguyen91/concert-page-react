import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../api/v1/index'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import marked from 'marked'
import './concertNews.css'

const ConcertNewsTitle = styled.h2.attrs({
  className: 'pt-2 pb-2'
})`
  text-align: center;
  text-transform: uppercase;
`

const ConcertNewsImg = styled.img.attrs({
  className: 'concertNews-img-title mx-auto d-block'
})``

class ConcertNewsId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concertNewsId: [],
      concertImgs: [],
      markdownContent: "",
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await api.getAllConcertNewsById(this.props.match.params.id)
      .then(concertNewsId => {
        this.setState({
          concertNewsId: concertNewsId.data.data,
          concertImgs: this.getConcertNewsImgs(concertNewsId.data.data.img_link),
          markedDownHtml: this.getMarkdowntext(concertNewsId.data.data.content),
          isLoading: false
        })
      })

      .catch(err => {
        console.log(err);
      });
  }

  getMarkdowntext(markdownText) {
    var rawInput = marked(markdownText, {sanitize: true})
    return {__html : rawInput}
  }

  getConcertNewsImgs(inputLinks) {
    return inputLinks.split(";").filter(String)
  }

  render() {
    return(
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <ConcertNewsImg src={this.state.concertImgs[0]} />
            <ConcertNewsTitle> {this.state.concertNewsId.title} </ConcertNewsTitle>
          </Col>
          <Col lg={12} sm={12} xs={12}>
            <div className="pt-2" dangerouslySetInnerHTML={this.state.markedDownHtml}/> 
          </Col>
        </Row>
      </Container>
    )
  }

}
export default ConcertNewsId;