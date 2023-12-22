import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./PersonalForm.module.sass";

export const PersonalForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
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
          value={name}
          setValue={setName}
          placeholder="e.g. Stephen King"
          label="Name"
          error={null}
        />
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          error={null}
        />
        <Input
          value={number}
          setValue={setNumber}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          error={null}
        />
      </div>
      <Button text="Next Step" />
    </div>
  );
};

export default PersonalForm;
