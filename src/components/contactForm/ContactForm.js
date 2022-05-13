import React from "react";

export const ContactForm = (props) => {
  const handleNameChange = (e) => {
    props.setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    props.setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit} >
      <label>Name:</label>
      <input type='text' value={props.name} onChange={handleNameChange} />
      <label>Phone:</label>
      <input type='tel' value={props.phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={handlePhoneChange} />
      <label>Email:</label>
      <input type='email' value={props.email} onChange={handleEmailChange} />
      <button type='submit'>Add Contact</button>
    </form>
  );
}
