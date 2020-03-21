import React, { Component } from 'react'
import api from '../../../api/v1/index'

export class ConcertData extends Component {
  constructor(props) {
    super(props)
    this.concertData = {};
  }

  componentDidMount = async () => {
    await api.getAllConcerts()
      .then(concerts => {
        this.concertData = {
          
        }
      })

      .catch(err => {

      })
  }
}