import { useHistory } from "react-router-dom"

export default function SubmitSuccess() {

  const history = useHistory();

  return (
    <div>
      <h2>Success!</h2>
      <p>Thank you for submitting your feedback!</p>
      <button onClick={history.push('/')}>RETURN HOME</button>
    </div>
  )
}