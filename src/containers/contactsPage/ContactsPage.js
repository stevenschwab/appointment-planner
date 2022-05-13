import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicateName) {
      props.addContact({ name, phone, email });
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    if (props.contacts.find((contact) => contact.name === name)) {
      setDuplicateName(true);
      alert('Name is a duplicate');
    } else {
      setDuplicateName(false);
    }
  }, [name, props.contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName} 
          phone={phone} 
          setPhone={setPhone}
          email={email} 
          setEmail={setEmail}
          handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
