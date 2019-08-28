import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComicPage from './pages/ComicPage'
import ResultsPage from './pages/ResultsPage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search/:search" component={ResultsPage} />
      <Route path="/comics/:id" component={ComicPage} />
    </Switch>
  )
}