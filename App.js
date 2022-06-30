import React, { useState } from 'react';
import './App.css';
import Users from './components/Users';
import UsersList from './components/UsersList';

const InitialUsers = () => {
  return [
  {
    id:'0',
    name:'Adam',
    age:"23"
  },
  {
    id:'1',
    name:'Ewa',
    age:'34'
  }
]};



function App(props) {
  const [usersList, setUsersList] = useState(InitialUsers);



  const addingUserHandler = (newUser) => {
    setUsersList(previousUsers => {
      return [newUser, ...previousUsers]
    })
  }

  return (
    <div className="App">
      <Users onAddingUser={addingUserHandler}/>
      <UsersList items={usersList} />
    </div>
  );
}

export default App;
