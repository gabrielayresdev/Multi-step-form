import styles from "./Switch.module.sass";

export const Switch = ({
  onChange,
  checked = false,
}: {
  onChange: () => void;
  checked?: boolean;
}) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Switch;
