import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import data from './data.json'


const TestimonyTitle = styled.h1.attrs({
    className: 'h1-responsive text-center font-weight-bold my-5'
})`
    text-transform: uppercase;
`

const TestimonyContent = styled.div.attrs({
    className: 'text-center'
})`
    white-space: pre-line
`

const TestimonyAvatar = styled.img.attrs({
})`
    width: 75px;
    height: 75px;
    object-fit: cover;
`

const TestimonyUserInfo = styled.h4.attrs({
    className: "mt-2 font-weight-bold text-center"
})``

class Testimony extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testimonies: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({
            testimonies: data,
            isLoading: true
        })
        // console.log(data)
    }

    render() {
        return(
            <Container>
                <TestimonyTitle>
                    Nhận Xét
                </TestimonyTitle>

                <Carousel interval={null} indicators={false}> 
                    {
                        this.state.testimonies.map((testimony, index) => (
                            <Carousel.Item key={index}>
                                <div className="text-center mx-auto mb-4">
                                    <TestimonyAvatar src={testimony.avatar} />
                                </div>

                                <TestimonyContent>
                                    {testimony.content}
                                </TestimonyContent>
                                <TestimonyUserInfo>
                                    {testimony.name}
                                </TestimonyUserInfo>
                                <TestimonyUserInfo>
                                    {testimony.title}
                                </TestimonyUserInfo>
                                <TestimonyUserInfo>
                                    {testimony.rating}
                                </TestimonyUserInfo>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Container>
        )
    }
}

export default Testimony;