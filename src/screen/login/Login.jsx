import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)

  }
  
  render() {
    return(
      <Container>
        <Row>
          <Col sm={6} md={6} lg={12}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group"> 
                <label htmlFor="email">Enter your email</label>
                <input value={this.state.email} onChange={this.handleInputChange}className="form-control" id="email" name="email" type="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Enter your password</label>
                <input value={this.state.password} onChange={this.handleInputChange}className="form-control" id="password" name="password" type="password" />
              </div>
              <button className="pt-2 btn btn-info btn-lg btn-block">Login</button>
            </form>
          </Col>
        </Row>
      </Container>
    )
  } 
}

export default LoginPage;