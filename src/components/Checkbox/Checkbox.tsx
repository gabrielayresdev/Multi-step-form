import React from "react";
import styles from "./Checkbox.module.sass";
import { motion } from "framer-motion";
import Check from "/src/assets/check.svg?react";

export const Checkbox = () => {
  const [active, setActive] = React.useState(false);
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
      {" " + active}
    </>
  );
};

export default Checkbox;
