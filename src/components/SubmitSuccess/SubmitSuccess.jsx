import { useHistory } from "react-router-dom"

export default function SubmitSuccess() {

  const history = useHistory();

  const goHome = () => { history.push('/') }

  return (
    <div>
      <h2>Success!</h2>
      <p>Thank you for submitting your feedback!</p>
      <button onClick={goHome}>RETURN HOME</button>
    </div>
  )
}