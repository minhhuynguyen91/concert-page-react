import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import  { Redirect } from 'react-router-dom'


import api from "../../api/v1/index"
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      login: false
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
    const {email, password}= this.state
    const loginInfo = {email, password}
    api.postAuth(loginInfo)
      .then(res => {
        // window.alert("Successfully login!")
        this.setState({
          email: '',
          password: '',
          login: true
        })
        
        console.log(res.data)
      })

      .catch(err => {
        console.log(err)
      })

  }
  
  render() {
    const {login} = this.state.login
    
    if (login) {
      return <Redirect to="/" />
    }
    else {
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
          <div className="pt-4"></div>
        </Container>
      )
    }
  } 
}

export default LoginPage;