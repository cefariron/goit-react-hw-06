import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";
import css from "../Contact/Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeContact(id));
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoMdContact className={css.icon} /> {name}
        </p>
        <p>
          <MdLocalPhone className={css.icon} /> {number}
        </p>
      </div>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};
