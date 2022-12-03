import { useState, useEffect } from "react";
import axios from "axios";

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
        <td>{item.feeling}</td>
        <td>{item.understanding}</td>
        <td>{item.support}</td>
        <td>{item.comments}</td>
        <td>{item.date}</td>
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