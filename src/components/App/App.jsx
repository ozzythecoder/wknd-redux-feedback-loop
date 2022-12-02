import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from '../Header/Header';
import RatingFeedback from '../RatingFeedback/RatingFeedback';
import Comments from '../Comments/Comments';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path='/feelings'>
          <RatingFeedback category='feelings' />
        </Route>
        <Route exact path='/support'>
          <RatingFeedback category='support' />
        </Route>
        <Route exact path='/understanding'>
          <RatingFeedback category='understanding' />
        </Route>
        <Route exact path='/comments'>
          <Comments />
        </Route>
      </Router>
    </div>
  );
}

export default App;
