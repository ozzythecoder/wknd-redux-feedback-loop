import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router-dom"

import './RatingFeedback.css';

export default function RatingFeedback({ category }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [ ratingIn, setRating ] = useState(useSelector(store => store.ratingsObj[category]))

  const paths = [ '/feelings', '/understanding', '/support', '/comments' ]

  const questions = {
    feelings: 'How are you feeling today?',
    understanding: 'How well are you understanding the content?',
    support: 'How well are you being supported?'
  }


  const handleNext = (e) => {
    e.preventDefault();

    if(!validInput()) return false;
  
    dispatch({
      type: 'UPDATE_RATING',
      payload: { id: [category], content: ratingIn }
    })

    history.push( paths[ paths.indexOf(history.location.pathname) + 1 ] )
  }

  const validInput = () => {

    if (ratingIn == '') {
      alert('You must enter a number.')
      return false;
    } else if (ratingIn > 5 || ratingIn < 1) {
      alert('Your rating must be a number from 1 to 5.')
      return false;
    } else {
      return true;
    }

  }

  return (
    <div>
      <h2>{questions[category]}</h2>
      <h4>On a scale of 1 to 5:</h4>
      <div className="form-flex">

        <input 
          type='number'
          inputMode='numeric'
          className="number-in"
          value={ratingIn}
          min={0}
          max={5}
          onChange={e => setRating(e.target.value)}
          />
        <button className='next-btn material-symbols-outlined' onClick={handleNext}>chevron_right</button>
      </div>
    </div>
  )
}