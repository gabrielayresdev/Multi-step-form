import { useFormContext } from "../../contexts/FormContext";
import styles from "./ConclusionPage.module.sass";

export const ConclusionPage = () => {
  const { plan, billingFrequency, addOns } = useFormContext();
  const addonsTotal = addOns.reduce((sum, current) => sum + current.price, 0);
  const total =
    billingFrequency === "monthly"
      ? plan.dollarsPerMonth + addonsTotal
      : (plan.dollarsPerMonth + addonsTotal) * 12;

  return (
    <div className={styles.wrapper}>
      <p>
        Total: {total}({billingFrequency})
      </p>
      {addOns.map((addon) => (
        <p>
          {addon.title}: {addon.price}
        </p>
      ))}
    </div>
  );
};

export default ConclusionPage;
