import Input from "../Input/Input";
import styles from "./PersonalForm.module.sass";
import { useFormContext } from "../../contexts/FormContext";

export const PersonalForm = () => {
  const { name, email, number } = useFormContext();
  return (
    <div className={styles.personal_form}>
      <div className={styles.input_container}>
        <Input
          value={name.value}
          onChange={name.onChange}
          placeholder="e.g. Stephen King"
          label="Name"
          error={name.error}
          onBlur={() => name.validate()}
        />
        <Input
          value={email.value}
          onChange={email.onChange}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          error={email.error}
          onBlur={() => email.validate()}
        />
        <Input
          value={number.value}
          onChange={number.onChange}
          type="tel"
          placeholder="e.g. +12 34 123456789"
          label="Phone Number"
          error={number.error}
          onBlur={() => number.validate()}
        />
      </div>
    </div>
  );
};

export default PersonalForm;
