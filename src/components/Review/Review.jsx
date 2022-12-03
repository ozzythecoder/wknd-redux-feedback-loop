import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from "axios";

export default function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const ratings = useSelector(store => store.ratingsObj)

  const submitFeedback = (e) => {
    e.preventDefault();

    axios.post('/')
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
      <p>Feelings: {ratings.feelings}</p>
      <p>Understanding: {ratings.understanding}</p>
      <p>Support: {ratings.support}</p>
      <p>Comments: {ratings.comments}</p>

      <button onClick={submitFeedback}>SUBMIT</button>
    </div>
  )
}