import React from "react";
import PlanRadio from "../PlanRadio/PlanRadio";
import styles from "./PlanSelection.module.sass";
import Arcade from "/src/assets/icon-arcade.svg?react";
import Advanced from "/src/assets/icon-advanced.svg?react";
import Pro from "/src/assets/icon-pro.svg?react";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
import { useFormContext } from "../../contexts/FormContext";

export interface PlanInterface {
  name: string;
  dollarsPerMonth: number;
}

export const PlanSelection = () => {
  const icons = [Arcade, Advanced, Pro];
  const plans = [
    {
      name: "arcade",
      dollarsPerMonth: 9,
    },
    {
      name: "advanced",
      dollarsPerMonth: 12,
    },
    {
      name: "pro",
      dollarsPerMonth: 15,
    },
  ];
  const [plan, setPlan] = React.useState<PlanInterface>(plans[0]);
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "yearly"
  >("monthly");
  const { pagination } = useFormContext();
  return (
    <div className={styles.plan_selection}>
      <div className={styles.form_header}>
        <h2 className={styles.title}>Select your plan</h2>
        <p className={styles.subtitle}>
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className={styles.radiobox}>
        {plans.map((item, index) => (
          <PlanRadio
            Icon={icons[index]}
            name="plan"
            plan={item}
            value={item.name}
            setValue={setPlan}
            checked={plan.name === item.name}
            key={item.name}
          />
        ))}
      </div>
      <div
        className={`${styles.billing_frequency} ${
          billingFrequency === "monthly" ? styles.monthly : styles.yearly
        }`}
      >
        <p className={`${styles.billing} ${styles.yearly}`}>monthly</p>
        {
          <Switch
            onChange={() =>
              setBillingFrequency((value) =>
                value === "monthly" ? "monthly" : "yearly"
              )
            }
          />
        }
        <p className={`${styles.billing} ${styles.yearly}`}>yearly</p>
      </div>

      <div className={styles.page_controls}>
        <Button text="Next Step" onClick={() => pagination.goNext()} />
      </div>
    </div>
  );
};

export default PlanSelection;
