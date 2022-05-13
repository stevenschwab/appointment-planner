import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.setContact}>
      <option key='no contact' value='no contact' selected="selected">No Contact</option>
      {props.contacts.map((contact) => {
        return <option key={contact.name} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
