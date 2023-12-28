import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./AddOnsCheckbox.module.sass";
import { AddOnsInterface } from "../AddOnsSelection/AddOnsSelection";

interface AddOnsCheckboxInterface {
  title: string;
  subtitle: string;
  price: number;
  setValue: React.Dispatch<React.SetStateAction<AddOnsInterface[]>>;
}

export const AddOnsCheckbox = ({
  title,
  subtitle,
  price,
  setValue,
}: AddOnsCheckboxInterface) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setValue((current) => {
      const addOns = checked
        ? [...current, { title, price }]
        : current.filter((addon) => addon.title !== title);
      return addOns;
    });
  }, [checked, title, price, setValue]);

  return (
    <div
      className={styles.checkbox}
      onClick={() => {
        console.log("cliquei");
        setChecked(!checked);
      }}
    >
      <Checkbox active={checked} setActive={setChecked} />
      <div className={styles.text_content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <p className={styles.price}>+${price}/mo</p>
    </div>
  );
};

export default AddOnsCheckbox;
