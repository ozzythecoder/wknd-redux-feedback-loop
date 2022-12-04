import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

export default function SubmitSuccess() {

  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = () => {
    dispatch({ type: 'CLEAR_FEEDBACK' })
    history.push('/')
  }

  return (
    <div>
      <h2>Feedback Received!</h2>
      <h4>Thank you for sharing your thoughts!</h4>
      <button className="text-btn next-btn" onClick={goHome}>LEAVE NEW FEEDBACK</button>
    </div>
  )
}