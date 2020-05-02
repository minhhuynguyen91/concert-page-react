import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../../screen/homepage/index'
import ConcertId  from '../../screen/concerts/concertId'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/concerts/:id" component={ConcertId} />
    </Switch>
  )
}