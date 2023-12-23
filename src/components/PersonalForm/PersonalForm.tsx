import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./PersonalForm.module.sass";
import { useFormContext } from "../../contexts/formContext";

export const PersonalForm = () => {
  const { name, email, number } = useFormContext();
  return (
    <div className={styles.personal_form}>
      <div className={styles.form_header}>
        <h2 className={styles.title}>Personal info</h2>
        <p className={styles.subtitle}>
          Please provide your name, email address, and phone number.
        </p>
      </div>
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
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          error={number.error}
          onBlur={() => number.validate()}
        />
      </div>
      <Button text="Next Step" />
    </div>
  );
};

export default PersonalForm;
