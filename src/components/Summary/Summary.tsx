import styles from "./Summary.module.sass";
import Checked from "/src/assets/icon-thank-you.svg?react";

export const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.icon}>
        <Checked />
      </div>
      <div className={styles.title}>Thank you!</div>
      <div className={styles.subtitle}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default Summary;
