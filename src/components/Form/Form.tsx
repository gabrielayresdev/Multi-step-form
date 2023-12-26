import { useFormContext } from "../../contexts/FormContext";
import FormProgress from "../FormProgress/FormProgress";
import PersonalForm from "../PersonalForm/PersonalForm";
import PlanSelection from "../PlanSelection/PlanSelection";
import styles from "./Form.module.sass";

export const Form = () => {
  const { pagination } = useFormContext();
  const { page, goTo } = pagination;
  const content = [<PersonalForm />, <PlanSelection />];
  return (
    <div className={styles.form}>
      <FormProgress page={page} goTo={goTo} />
      <div className={styles.content}>{content[page]}</div>
    </div>
  );
};

export default Form;
