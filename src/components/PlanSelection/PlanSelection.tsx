import React from "react";
import PlanRadio from "../PlanRadio/PlanRadio";
import styles from "./PlanSelection.module.sass";
import Arcade from "/src/assets/icon-arcade.svg?react";
import Advanced from "/src/assets/icon-advanced.svg?react";
import Pro from "/src/assets/icon-pro.svg?react";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
import { useFormContext } from "../../contexts/FormContext";

export const PlanSelection = () => {
  const icons = [Arcade, Advanced, Pro];

  const { plan, setPlan, plans, billingFrequency, setBillingFrequency } =
    useFormContext();

  return (
    <div className={styles.plan_selection}>
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
                value === "monthly" ? "yearly" : "monthly"
              )
            }
          />
        }
        <p className={`${styles.billing} ${styles.yearly}`}>yearly</p>
      </div>
    </div>
  );
};

export default PlanSelection;
