import React, { useEffect,  useState } from 'react'
import axios from 'axios'


const PersonList =()=> {

    const [persons, setPersons] = useState([]);

    const fetchUsers = async () => {
       let resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
       let data =await resp.data; 
       setPersons(data);
    }

    useEffect(() => {
        fetchUsers()
    },[])
 
      return (
          <ul>
              {
                  persons.map(person => (<li key={person.id}>{person.name}</li>))
              }
          </ul>
      )
   
  }
  export default PersonList
