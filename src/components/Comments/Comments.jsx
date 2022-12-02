

export default function Comments() {

  const handleNext = (e) => {
    e.preventDefault()
    console.log('in handleNext');
  }

  return (
    <div>
      <h2>Anything else you'd like to add?</h2>
      <input type='text' />
      <button className="next-btn" onClick={handleNext}>REVIEW</button>
    </div>
  )
}