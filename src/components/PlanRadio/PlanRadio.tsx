import { SetStateAction } from "react";
import styles from "./PlanRadio.module.sass";
import { PlanInterface } from "../PlanSelection/PlanSelection";

interface PlanRadioInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  plan: PlanInterface;
  setValue: React.Dispatch<SetStateAction<PlanInterface>>;
}

export const PlanRadio = ({
  name,
  plan,
  setValue,
  ...args
}: PlanRadioInterface) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        name={name}
        onChange={() => setValue(plan)}
        {...args}
      />
    </div>
  );
};

export default PlanRadio;
