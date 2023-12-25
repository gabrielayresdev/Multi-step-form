import React from "react";
import PlanRadio from "../PlanRadio/PlanRadio";
import styles from "./PlanSelection.module.sass";
import Arcade from "/src/assets/icon-arcade.svg?react";
import Advanced from "/src/assets/icon-advanced.svg?react";
import Pro from "/src/assets/icon-pro.svg?react";

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
  return (
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
  );
};

export default PlanSelection;
