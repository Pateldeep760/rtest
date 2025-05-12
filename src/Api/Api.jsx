import React, { use } from 'react'
import Axios from 'axios'
import ApiData from './ApiData'

import { useEffect, useState } from 'react'

const Api = () => {


    const [Api1, setApi1] = useState([])

    useEffect(() => {

        Axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setApi1(response.data)
                console.log(response.data)
                setApi1(response.data)
            })
    }, [])


    return (
        <div>
            <h1>Api Data Fetching</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {ApiData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr/>
          <h1>API Fetch from Fake API</h1>
          {
            Api1.
            slice(0, 10).
            map((item) => {
                return (
                    <div>
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                        <h3>{item.completed ? "Completed" : "Not Completed"}</h3>
                    </div>
                )
            })
          }


    </div>
  );
}

export default Api