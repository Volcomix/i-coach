import Container from '@material-ui/core/Container'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateInterval from './containers/CreateInterval'
import Intervals from './containers/Intervals'
import Training from './containers/Training'

export default function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <Training />
          </Route>
          <Route exact path="/intervals">
            <Intervals />
          </Route>
          <Route path="/intervals/create">
            <CreateInterval />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
