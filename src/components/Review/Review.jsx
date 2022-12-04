import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from "axios";

import './Review.css'

export default function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const feedbackObj = useSelector(store => store.ratingsObj)

  const submitFeedback = (e) => {
    e.preventDefault();

    axios.post('/feedback', feedbackObj)
      .then(res => {
        history.push('/success');
      }).catch(err => {
        alert('Server error. Please try again later.')
        console.log('axios.post', err);
      })
  }

  const moveBack = () => { history.goBack() }

  return (
    <div>
      <h2>Review your feedback:</h2>
      <div className="review-display">
          <p className="feedback-display-key">Feelings:</p>      <p className="feedback-display-value">{feedbackObj.feelings}</p>
          <p className="feedback-display-key">Understanding:</p> <p className="feedback-display-value">{feedbackObj.understanding}</p>
          <p className="feedback-display-key">Support:</p>       <p className="feedback-display-value">{feedbackObj.support}</p>
          <p className="feedback-display-key">Comments:</p>      <p className="feedback-display-value comments-display">{feedbackObj.comments == '' ? 'No comment' : feedbackObj.comments}</p>
      </div>
      <div className="form-flex">
        <button 
            className='next-btn material-symbols-outlined'
            onClick={moveBack}>chevron_left</button>
        <button
          className="next-btn text-btn"
          onClick={submitFeedback}>SUBMIT</button>
      </div>
    </div>
  )
}