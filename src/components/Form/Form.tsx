import { useFormContext } from "../../contexts/FormContext";
import AddOnsSelection from "../AddOnsSelection/AddOnsSelection";
import ConclusionPage from "../ConclusionPage/ConclusionPage";
import FormProgress from "../FormProgress/FormProgress";
import PersonalForm from "../PersonalForm/PersonalForm";
import PlanSelection from "../PlanSelection/PlanSelection";
import ThanksPage from "../ThanksPage/ThanksPage";
import styles from "./Form.module.sass";

export const Form = () => {
  const { pagination, completed } = useFormContext();
  const { page, goTo } = pagination;
  const content = [
    <PersonalForm />,
    <PlanSelection />,
    <AddOnsSelection />,
    <ConclusionPage />,
  ];
  return (
    <div className={styles.form}>
      <div className={styles.mobile_progress_bar}>
        <FormProgress page={page} goTo={goTo} />
      </div>
      <div className={styles.container}>
        <div className={styles.desktop_progress_bar}>
          <FormProgress page={page} goTo={goTo} />
        </div>
        <div className={styles.content}>
          {completed ? <ThanksPage /> : content[page]}
        </div>
      </div>
    </div>
  );
};

export default Form;
