import React from 'react';
import Card from './Card';
import contacts from '../contacts';

function createCard(contact) {
  return <Card
  key = {contact.id}
  name={contact.name}
  img = "https://picsum.photos/200"
  email = {contact.email}
  tel = {contact.tel}
  />
}

function App() {
  return (
    <div className="flex-container">
    {contacts.map(createCard)};
    </div>
  );
}

export default App;
