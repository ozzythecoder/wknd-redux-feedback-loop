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
  
  const feedbackTable = feedbackData.map((item, index) => {

    return (
      <tr key={index}>
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
          </tr>
        </thead>
        <tbody>
          { feedbackTable }
        </tbody>
      </table>
    </div>
  )
}