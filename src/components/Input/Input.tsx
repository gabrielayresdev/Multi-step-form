import { SetStateAction } from "react";
import generateRandomId from "../../utils/generateRandomId";
import styles from "./Input.module.sass";

interface inputInterface {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  label: string;
  placeholder?: string;
  type?: string;
  id?: string;
  error: null | string;
}

export const Input = ({
  value,
  setValue,
  label,
  placeholder,
  type = "text",
  id = generateRandomId(),
  error,
}: inputInterface) => {
  return (
    <div className={styles.input_container}>
      <div className={styles.input_header}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <span className={styles.error}>{error}</span>
      </div>
      <input
        className={`${styles.input} ${error ? styles.error : ""}`}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
