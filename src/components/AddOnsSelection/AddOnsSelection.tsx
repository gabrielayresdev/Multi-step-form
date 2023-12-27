import AddOnsCheckbox from "../AddOnsCheckbox/AddOnsCheckbox";
import styles from "./AddOnsSelection.module.sass";

export const AddOnsSelection = () => {
  return (
    <div className={styles.wrapper}>
      <AddOnsCheckbox
        title="Online service"
        subtitle="Access to multiplayer games"
        price={2}
      />
    </div>
  );
};

export default AddOnsSelection;
