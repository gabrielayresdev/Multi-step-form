import React from "react";
import styles from "./Checkbox.module.sass";
import { motion } from "framer-motion";
import Check from "/src/assets/check.svg?react";

interface CheckboxInterface {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox = ({ active, setActive }: CheckboxInterface) => {
  const checkbox = {
    unchecked: { border: "1px solid #D6D9E6" },
    checked: { border: "1px solid #483EFF" },
  };
  const check = {
    unchecked: { opacity: 0, width: 0 },
    checked: { opacity: 1, width: 100 },
  };
  return (
    <>
      <motion.div
        className={styles.checkbox}
        initial="unchecked"
        animate={active ? "checked" : "unchecked"}
        variants={checkbox}
        onClick={() => setActive(!active)}
      >
        <motion.div
          className={styles.check}
          initial="unchecked"
          animate={active ? "checked" : "unchecked"}
          variants={check}
        >
          <Check />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Checkbox;
