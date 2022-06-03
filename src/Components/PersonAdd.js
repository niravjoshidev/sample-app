import React, { useEffect,  useState } from 'react'
import axios from 'axios'


export default function PersonAdd() {

    const [personName, setPersonName] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: personName
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

  return (
    <div>
      <form action=""onSubmit={handleSubmit}>
      <label>Persaon Name
            <input type="text" name="personName" onChange={(e) => { setPersonName(e.target.value) }} />  
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
