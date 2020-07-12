import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../../screen/homepage/index'
import ConcertIndex from '../../screen/concerts/concertIndex'
import ConcertId  from '../../screen/concerts/concertId'
import ArtistId  from '../../screen/artists/artistId'
import ConcertNewsId from '../../screen/concertNews/concertNewsId'
import Introduce from '../../screen/introduce/introduce'
import HomeCommencedDates from '../../screen/homepage/commencedDates/HomeCommencedDates'
import LoginPage from '../../screen/login/Login'
import NotFoundPage  from '../../screen/notFoundPage/notFoundPage'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/concerts/:id" component={ConcertId} />
      <Route path="/concerts/" component={ConcertIndex} />
      <Route path="/artists/:id" component={ArtistId} />
      <Route path="/concertNews/:id" component={ConcertNewsId} />
      <Route path="/contact" component={Introduce} />
      <Route path="/commencedDates" component={HomeCommencedDates} />
      <Route path="/login" component={LoginPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}