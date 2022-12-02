import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function RatingFeedback({ category }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [ ratingIn, setRating ] = useState(useSelector(store => store.ratingsObj[category]))

  const questions = {
    feelings: 'How are you feeling today?',
    understanding: 'How well are you understanding the content?',
    support: 'How well are you being supported?'
  }

  const handleNext = (e) => {
    e.preventDefault();
    console.log('in handleNext, rating', ratingIn);
  }

  return (
    <div>
      <h2>{questions[category]}</h2>
      <input 
        type='number'
        value={ratingIn}
        min={0}
        max={5}
        onChange={e => setRating(e.target.value)}
      />
      <button className='next-btn' onClick={handleNext}>NEXT</button><br />
      <p>{category}: {ratingIn}</p>
    </div>
  )
}