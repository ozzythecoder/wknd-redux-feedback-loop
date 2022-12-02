import React from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import RatingFeedback from '../RatingFeedback/RatingFeedback';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <RatingFeedback category='feelings' />
    </div>
  );
}

export default App;
