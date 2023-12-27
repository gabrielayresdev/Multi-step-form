import { useFormContext } from "../../contexts/FormContext";
import AddOnsSelection from "../AddOnsSelection/AddOnsSelection";
import FormPage from "../FormPage/FormPage";
import FormProgress from "../FormProgress/FormProgress";
import PersonalForm from "../PersonalForm/PersonalForm";
import PlanSelection from "../PlanSelection/PlanSelection";
import styles from "./Form.module.sass";

export const Form = () => {
  const { pagination } = useFormContext();
  const { page, goTo } = pagination;
  const content = [
    <FormPage
      title="Personal info"
      subtitle="Please provide your name, email address, and phone number."
      content={<PersonalForm />}
    />,
    <FormPage
      title="Select your plan"
      subtitle="You have the option of monthly or yearly billing."
      content={<PlanSelection />}
    />,
    <FormPage title="" subtitle="" content={<AddOnsSelection />} />,
  ];
  return (
    <div className={styles.form}>
      <FormProgress page={page} goTo={goTo} />
      <div className={styles.content}>{content[page]}</div>
    </div>
  );
};

export default Form;
