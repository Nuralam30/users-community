import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([])

  const addMember = (name) => {
    setTeam([...team, name])
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, []);


  return (
    <div className="App">
      <div className="all-user">
        {
          users.map( (user, indx) => <User key={indx} user={user} addMember={addMember}></User>)
        }
      </div>
      <div className="team-members">
        <h4>Team Members</h4>
        <ul>
          {
            team.map( (member, ind) => <li key={ind}>{member}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
