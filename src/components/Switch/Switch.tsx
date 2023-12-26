import styles from "./Switch.module.sass";

export const Switch = ({ onChange }: { onChange: () => void }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChange} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Switch;
