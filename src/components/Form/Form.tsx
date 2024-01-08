import { useFormContext } from "../../contexts/FormContext";
import AddOnsSelection from "../AddOnsSelection/AddOnsSelection";
import ConclusionPage from "../ConclusionPage/ConclusionPage";
import FormPage from "../FormPage/FormPage";
import FormProgress from "../FormProgress/FormProgress";
import PersonalForm from "../PersonalForm/PersonalForm";
import PlanSelection from "../PlanSelection/PlanSelection";
import Summary from "../Summary/Summary";
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
    <FormPage
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
      content={<AddOnsSelection />}
    />,
    <FormPage
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
      content={<ConclusionPage />}
    />,
    <Summary />,
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
        <div className={styles.content}>{content[page]}</div>
      </div>
    </div>
  );
};

export default Form;
