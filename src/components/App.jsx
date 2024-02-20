import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import "./App.css";

export const App = () => {
  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
