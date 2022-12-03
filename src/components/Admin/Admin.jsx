import { useState, useEffect } from "react";
import axios from "axios";

import './Admin.css'

export default function Admin() {
  
  useEffect(() => { getFeedback() }, [])

  const [ feedbackData, setFeedback ] = useState([])

  const getFeedback = () => {
    axios.get('/feedback')
      .then(res => {
        console.log('successful get');
        setFeedback(res.data)
      })
      .catch(err => console.log(err));
  }

  const handleDelete = (idToDelete) => {

    console.log('in handleDelete', idToDelete);

    axios.delete('/feedback/' + idToDelete)
      .then(res => {
        console.log('successful delete');
        getFeedback();
      }).catch(err => {
        console.log('axios.delete', err);
        alert('Server error. Please try again later.')
      })
  }
  
  const feedbackTable = feedbackData.map((item) => {

    return (
      <tr key={item.id}>
        <td
          className={item.feeling < 3 ? 'red-bg' : ''} >
          {item.feeling}</td>
        <td
          className={item.understanding < 3 ? 'red-bg' : ''} >
          {item.understanding}</td>
        <td
          className={item.support < 3 ? 'red-bg' : ''}>
          {item.support}</td>
        <td className="comments-cell">{item.comments}</td>
        <td className="date-cell">{new Date(item.date).toLocaleDateString()}</td>
        <td className="delete-cell">
          <button
            className="delete-btn material-symbols-outlined"
            onClick={() => handleDelete(item.id)}>
              delete
            </button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h3>All Feedback</h3>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { feedbackTable }
        </tbody>
      </table>
    </div>
  )
}