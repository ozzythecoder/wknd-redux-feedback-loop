import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from "axios";

export default function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const feedbackObj = useSelector(store => store.ratingsObj)

  const submitFeedback = (e) => {
    e.preventDefault();

    axios.post('/feedback', feedbackObj)
      .then(res => {
        dispatch({ type: 'CLEAR_FEEDBACK' })
        history.push('/success');
      }).catch(err => {
        alert('Server error. Please try again later.')
        console.log('axios.post', err);
      })
  }

  return (
    <div>
      <h2>Review your feedback:</h2>
      <p>Feelings: {feedbackObj.feelings}</p>
      <p>Understanding: {feedbackObj.understanding}</p>
      <p>Support: {feedbackObj.support}</p>
      <p>Comments: {feedbackObj.comments}</p>

      <button onClick={submitFeedback}>SUBMIT</button>
    </div>
  )
}