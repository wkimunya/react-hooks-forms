import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log("Form submitted with:", firstName, lastName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange} // Handle first name input change
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange} // Handle last name input change
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default Form;
