import { useSelector } from "react-redux";
import { getContacts, selectedSearchQuery } from "../../redux/selectors.js";
import { Contact } from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const searchQuery = useSelector(selectedSearchQuery);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
