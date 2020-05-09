import React, { Component } from 'react'
import styled from 'styled-components'

import './footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container className="contact-info" fluid>
        <Row>
          <Col>
            <p className="mbr-text">
              <strong> Địa chỉ </strong>
              <br />
              5B Võ Văn Tần, P.6, Quận 3, Hồ Chí Minh
              <br />
              <br />
              <strong> Liên Hệ </strong>
              <br />
              Phone: (028) 3824 2465
              <br />
              Email: Nhahat5B@gmail.com 
            </p>
          </Col>

          <Col>
            <p className="mbr-text">
              <strong> Phản Hồi </strong>
              <br /> Mọi chi tiết phản hồi của quý khách đều được chúng tôi cân nhắc và đánh giá cao            
            </p>
          </Col>
            <div className="google-map-mb-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.399866519003!2d106.6920253148008!3d10.780654992318686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f372e05fe07%3A0xf4ac0923542ebb1e!2zNUIgVsO1IFbEg24gVOG6p24sIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2ssg!4v1568874294860!5m2!1sen!2ssg" width="450" height="450" frameBorder="0" allowFullScreen />
            </div>
          <Col>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;