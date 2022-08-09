import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';

function App() {
  
    const [users, setUsers] = useState([]);

    useEffect( () =>{
      fetch('https://randomuser.me/api/?results=5')
      .then( res => res.json())
      .then( data => setUsers(data.results))
  }, []);
  console.log(users)

  return (
    <div className="App">
      {
        users.map( user => <User user={user}></User>)
      }
    </div>
  );
}

export default App;
