import React from 'react';
import Users from './Users'

const UsersList = (props) => {
  return
  {props.items.map(person => <Users name={person.name} age={person.age}/>)}
}

export default UsersList;
