import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Header from '../Header/Header';
import RatingFeedback from '../RatingFeedback/RatingFeedback';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

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

        <Route exact path='/review'>
          <Review />
        </Route>

        <Route exact path='/success'>
          <SubmitSuccess />
        </Route>

        <Route exact path='/admin'>
          <Admin />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
