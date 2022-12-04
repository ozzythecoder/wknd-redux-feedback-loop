import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Comments() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [ commentTxtIn, setCommentTxt ] = useState(useSelector(store => store.ratingsObj.comments))

  const handleNext = (e) => {
    e.preventDefault()
    console.log('in handleNext');

    dispatch({
      type: 'UPDATE_RATING',
      payload: { id: 'comments', content: commentTxtIn }
    })

    history.push('/review');
  }

  const moveBack = () => { history.goBack() }

  return (
    <div>
      <h2>Anything else you'd like to add?</h2>
      <div className="form-flex">
        <button 
          className='next-btn material-symbols-outlined'
          onClick={ moveBack }>
            chevron_left
        </button>

        <textarea
          className="comments"
          placeholder="Additional comments (optional)"
          value={commentTxtIn}
          onChange={e => setCommentTxt(e.target.value)}
          />
        <button className="text-btn next-btn" onClick={handleNext}>REVIEW</button>
      </div>
    </div>
  )
}