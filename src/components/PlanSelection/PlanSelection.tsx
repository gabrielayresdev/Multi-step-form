import React from "react";
import PlanRadio from "../PlanRadio/PlanRadio";
import styles from "./PlanSelection.module.sass";

export interface PlanInterface {
  name: string;
  dollarsPerMonth: number;
}

export const PlanSelection = () => {
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
  return (
    <div className={styles.wrapper}>
      {plans.map((item) => (
        <PlanRadio
          name="plan"
          plan={item}
          value={item.name}
          setValue={setPlan}
          checked={plan.name === item.name}
          key={item.name}
        />
      ))}
      {`${plan.name} - $${plan.dollarsPerMonth}/mo`}
    </div>
  );
};

export default PlanSelection;
