import React from 'react';
import AddUser from './AddUser';

const Users = (props) => {
  const saveFormHandler = (savedFormData) => {
    const newUser = {
      ...savedFormData, //spreads the properties
      id: Math.random().toString()
    };
    props.onAddingUser(newUser);
  }

  return
  <AddUser onSaveForm={saveFormHandler}/>
}

export default Users;
