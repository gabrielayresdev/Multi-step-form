import PlanRadio from "../PlanRadio/PlanRadio";
import styles from "./PlanSelection.module.sass";
import Arcade from "/src/assets/icon-arcade.svg?react";
import Advanced from "/src/assets/icon-advanced.svg?react";
import Pro from "/src/assets/icon-pro.svg?react";
import Switch from "../Switch/Switch";
import { useFormContext } from "../../contexts/FormContext";
import FormHeader from "../FormHeader/FormHeader";
import FooterPaginationControl from "../FooterPaginationControl/FooterPaginationControl";

export const PlanSelection = () => {
  const icons = [Arcade, Advanced, Pro];

  const { plan, setPlan, plans, billingFrequency, setBillingFrequency } =
    useFormContext();

  return (
    <div className={styles.plan_selection}>
      <FormHeader
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <div className={styles.content}>
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
              checked={billingFrequency === "yearly"}
            />
          }
          <p className={`${styles.billing} ${styles.yearly}`}>yearly</p>
        </div>
      </div>
      <FooterPaginationControl />
    </div>
  );
};

export default PlanSelection;
