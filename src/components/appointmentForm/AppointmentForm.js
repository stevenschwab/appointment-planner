import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    props.setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    props.setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    props.setTime(e.target.value);
  };

  const handleContactChange = (e) => {
    props.setContact(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Title:</label>
      <input type="text" value={props.title} onChange={handleTitleChange} />
      <label>Date:</label>
      <input type="date" value={props.date} onChange={handleDateChange} min={getTodayString()} />
      <label>Time:</label>
      <input type="time" value={props.time} onChange={handleTimeChange} />
      <ContactPicker contacts={props.contacts} setContact={handleContactChange} />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
