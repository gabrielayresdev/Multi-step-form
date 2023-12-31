import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./AddOnsCheckbox.module.sass";
import { AddOnsInterface } from "../../contexts/FormContext";

interface AddOnsCheckboxInterface {
  title: string;
  subtitle: string;
  price: number;
  value: AddOnsInterface[];
  setValue: React.Dispatch<React.SetStateAction<AddOnsInterface[]>>;
}

export const AddOnsCheckbox = ({
  title,
  subtitle,
  price,
  value,
  setValue,
}: AddOnsCheckboxInterface) => {
  const [checked, setChecked] = React.useState(() => {
    return (
      value.filter((addon) => addon.title === title && addon.price === price)
        .length > 0
    );
  });

  const previousValueRef = React.useRef<AddOnsInterface[]>(value);

  React.useEffect(() => {
    const previousValue = previousValueRef.current;

    setValue((current) => {
      if (checked) {
        const alreadyExists =
          previousValue.filter(
            (addon) => addon.price === price && addon.title === title
          ).length > 0;
        if (!alreadyExists) {
          return [...current, { title, price }];
        } else {
          return current;
        }
      } else {
        return current.filter((addon) => addon.title !== title);
      }
    });
  }, [checked, title, price, setValue]);

  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.active : ""}`}
      onClick={() => {
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
