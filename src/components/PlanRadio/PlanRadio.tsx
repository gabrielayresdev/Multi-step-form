import { SetStateAction } from "react";
import styles from "./PlanRadio.module.sass";
import { PlanInterface } from "../PlanSelection/PlanSelection";

interface PlanRadioInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  plan: PlanInterface;
  checked: boolean | undefined;
  setValue: React.Dispatch<
    SetStateAction<PlanInterface> & { title?: string | undefined }
  >;
}

export const PlanRadio = ({
  Icon,
  name,
  plan,
  setValue,
  checked,
  ...args
}: PlanRadioInterface) => {
  return (
    <div
      className={`${styles.radio} ${checked ? styles.checked : ""}`}
      onClick={() => setValue(plan)}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
      <h3 className={styles.title}>{plan.name}</h3>
      <p className={styles.price}>${plan.dollarsPerMonth}/mo</p>
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
