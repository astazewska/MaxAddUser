import React, {useState} from 'react';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.vaue);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      name:enteredName,
      age:enteredAge
    }
    props.onSaveForm(formData);
    setEnteredName('');
    setEnteredAge('');

  }

  return (
    <form onSubmit={submitHandler}>
      <div>
      <div>
        <label>Name</label>
        <input type='text' onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type='number' onChange={ageChangeHandler} />
      </div>
      <button type='submit'>Add</button>
      </div>
    </form>);

}

export default AddUser;
