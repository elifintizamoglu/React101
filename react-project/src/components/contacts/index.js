import { useState, useEffect } from 'react';
import List from './list';
import Form from './form';


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Elif",
      phone_number: 123
    },
    {
      fullname: "Ayşe",
      phone_number: 245
    },
    {
      fullname: "Fatma",
      phone_number: 658
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);


  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;

