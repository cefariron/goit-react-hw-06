import { useState } from "react";
import { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import { save, load } from '../common/localstorage';
// import userdata from '../userdata/userdata.json';
import "./App.css";

const getInitContacts = () => {
  const currContacts = load("contacts");
  return currContacts ? currContacts : [];
}

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contactList, setContactList] = useState(getInitContacts);
  
  const visibleUser = contactList.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    save("contacts", contactList)
  }, [contactList])

  const addContact = newContact => {
    setContactList(contacts => {
      return [...contacts, newContact]
    })
  };

  const removeContact = userId => {
    setContactList(contacts => {
      return contacts.filter(contact => contact.id !== userId);
    });
  };

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox value={inputValue} onChange={setInputValue} />
        <ContactList data={visibleUser} onDelete={removeContact}/>
      </div>
    </>
  );
};
