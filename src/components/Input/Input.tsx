import generateRandomId from "../../utils/generateRandomId";
import styles from "./Input.module.sass";

interface inputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  type?: string;
  id?: string;
  error: null | string;
}

export const Input = ({
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  id = generateRandomId(),
  error,
  ...args
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
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        {...args}
      />
    </div>
  );
};

export default Input;
