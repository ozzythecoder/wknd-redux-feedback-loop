import { useHistory } from "react-router-dom"

export default function Home() {

  const history = useHistory();

  const beginReview = () => {
    history.push('/feelings')
  }

  return(
    <div>
      <h2>Welcome!</h2>
      <h3>Let's get started on your feedback.</h3>
      <button
        className="text-btn"
        onClick={beginReview}>BEGIN</button>
    </div>
  )
}