import { useHistory } from "react-router-dom"

export default function Home() {

  const history = useHistory();

  const beginReview = () => {
    history.push('/feelings')
  }

  return(
    <div>
      <h2>Welcome student!</h2>
      <h3>Let's get started on your feedback.</h3>
      <button onClick={beginReview}>BEGIN</button>
    </div>
  )
}