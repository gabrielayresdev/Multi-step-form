import Checkbox from "../Checkbox/Checkbox";
import styles from "./AddOnsCheckbox.module.sass";

interface AddOnsCheckboxInterface {
  title: string;
  subtitle: string;
  price: number;
}

export const AddOnsCheckbox = ({
  title,
  subtitle,
  price,
}: AddOnsCheckboxInterface) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" className={styles.input}></input>
      <Checkbox />
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p>+${price}/mo</p>
    </div>
  );
};

export default AddOnsCheckbox;
