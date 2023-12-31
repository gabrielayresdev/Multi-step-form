import AddOnsCheckbox from "../AddOnsCheckbox/AddOnsCheckbox";
import styles from "./AddOnsSelection.module.sass";
import { useFormContext } from "../../contexts/FormContext";

export const AddOnsSelection = () => {
  const { addOns, setAddOns } = useFormContext();
  return (
    <div className={styles.addOns_flexbox}>
      <AddOnsCheckbox
        title="Online service"
        subtitle="Access to multiplayer games"
        price={1}
        value={addOns}
        setValue={setAddOns}
      />
      <AddOnsCheckbox
        title="Larger storage"
        subtitle="Extra 1TB of cloud save"
        price={2}
        value={addOns}
        setValue={setAddOns}
      />
      <AddOnsCheckbox
        title="Customizable Profile"
        subtitle="Custom theme on your profile"
        price={2}
        value={addOns}
        setValue={setAddOns}
      />
    </div>
  );
};

export default AddOnsSelection;
