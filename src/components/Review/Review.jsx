import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const ratings = useSelector(store => store.ratingsObj)

  const submitFeedback = (e) => {
    e.preventDefault();
    console.log('in submitFeedback');
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