import { useFormContext } from "../../contexts/FormContext";
import styles from "./ConclusionPage.module.sass";

export const ConclusionPage = () => {
  const { plan, billingFrequency, addOns, pagination } = useFormContext();

  const shortening = billingFrequency === "monthly" ? "mo" : "yr";
  const planPrice =
    billingFrequency === "monthly"
      ? plan.dollarsPerMonth
      : plan.dollarsPerMonth * 12;
  const addonsPrice =
    billingFrequency === "yearly"
      ? addOns.map((addon) => {
          addon.price * 12;
          return addon;
        })
      : addOns;
  const addonsSum = addonsPrice.reduce(
    (sum, current) => sum + current.price,
    0
  );
  const total = planPrice + addonsSum;
  return (
    <div className={styles.conclusion}>
      <div className={styles.itens}>
        <div className={styles.plan}>
          <div className={styles.left_side}>
            <p className={styles.plan_name}>
              {plan.name} ({billingFrequency})
            </p>
            <button
              onClick={() => pagination.goTo(1)}
              className={styles.change_button}
            >
              Change
            </button>
          </div>
          <p className={styles.price}>
            ${planPrice}/{shortening}
          </p>
        </div>
        {addOns.length > 0 ? (
          <>
            <div className={styles.detail}></div>
            <div className={styles.addons}>
              {addonsPrice.map((addon) => (
                <div className={styles.addon}>
                  <p className={styles.title}>{addon.title}</p>
                  <p className={styles.price}>
                    +${addon.price}/{shortening}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className={styles.total}>
        <p className={styles.key}>
          Total (per {billingFrequency === "monthly" ? "month" : "year"})
        </p>
        <p className={styles.value}>
          ${total}/{shortening}
        </p>
      </div>
    </div>
  );
};

export default ConclusionPage;
