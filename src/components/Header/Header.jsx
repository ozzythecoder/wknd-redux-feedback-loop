import { useHistory } from "react-router-dom"

export default function Header() {
  const history = useHistory();

  return (
    <header className='App-header'>
      <h1 className='App-title'>
        <a href="/#/">
          Feedback!
        </a>
      </h1>
      <h4>Don't forget it!</h4>
    </header>
  )
}