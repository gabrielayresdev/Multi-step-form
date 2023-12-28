import React from "react";
import AddOnsCheckbox from "../AddOnsCheckbox/AddOnsCheckbox";
import styles from "./AddOnsSelection.module.sass";

export interface AddOnsInterface {
  title: string;
  price: number;
}

export const AddOnsSelection = () => {
  const [addOns, setAddOns] = React.useState<AddOnsInterface[]>([]);
  console.log(addOns);
  return (
    <div className={styles.addOns_flexbox}>
      <AddOnsCheckbox
        title="Online service"
        subtitle="Access to multiplayer games"
        price={1}
        setValue={setAddOns}
      />
      <AddOnsCheckbox
        title="Larger storage"
        subtitle="Extra 1TB of cloud save"
        price={2}
        setValue={setAddOns}
      />
      <AddOnsCheckbox
        title="Customizable Profile"
        subtitle="Custom theme on your profile"
        price={2}
        setValue={setAddOns}
      />

      {addOns.map((x) => {
        return <p>{x.title}</p>;
      })}
    </div>
  );
};

export default AddOnsSelection;
