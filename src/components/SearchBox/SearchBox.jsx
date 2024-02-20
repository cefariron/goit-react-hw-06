import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  const inputId = useId();
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>Search contacts by name</label>
      <input
        className={css.input}
        type="text"
        id={inputId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
