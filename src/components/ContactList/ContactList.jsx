import { Contact } from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export const ContactList = ({ data, onDelete }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {data.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
