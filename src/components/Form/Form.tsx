import { useFormContext } from "../../contexts/FormContext";
import FormProgress from "../FormProgress/FormProgress";
import PageTest from "../PageTest/PageTest";
import PersonalForm from "../PersonalForm/PersonalForm";
import PlanSelection from "../PlanSelection/PlanSelection";
import styles from "./Form.module.sass";

export const Form = () => {
  const { pagination } = useFormContext();
  const { page, goTo } = pagination;
  const content = [
    <PersonalForm />,
    <PlanSelection />,
    <PageTest content="page 3" />,
    <PageTest content="page 4" />,
  ];
  return (
    <div className={styles.form}>
      <FormProgress page={page} goTo={goTo} />
      {content[page]}
    </div>
  );
};

export default Form;
