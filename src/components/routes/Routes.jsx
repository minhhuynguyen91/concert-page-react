import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../../screen/homepage/index'
import ConcertId  from '../../screen/concerts/concertId'
import ArtistId  from '../../screen/artists/artistId'
import ConcertNewsId  from '../../screen/concertNews/concertNewsId'
import NotFoundPage  from '../../screen/notFoundPage/notFoundPage'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/concerts/:id" component={ConcertId} />
      <Route path="/artists/:id" component={ArtistId} />
      <Route path="/concertNews/:id" component={ConcertNewsId} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}