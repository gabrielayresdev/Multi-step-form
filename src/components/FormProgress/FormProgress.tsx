import FormStep from "../FormStep/FormStep";
import styles from "./FormProgress.module.sass";

interface FormProgressInterface {
  page: number;
  goTo: (num: number) => void;
}

export const FormProgress = ({ page, goTo }: FormProgressInterface) => {
  return (
    <div className={styles.formProgress}>
      <FormStep
        step={{ order: 0, title: "your info" }}
        page={page}
        goTo={goTo}
      />
      <FormStep
        step={{ order: 1, title: "select plan" }}
        page={page}
        goTo={goTo}
      />
      <FormStep step={{ order: 2, title: "add-ons" }} page={page} goTo={goTo} />
      <FormStep step={{ order: 3, title: "summary" }} page={page} goTo={goTo} />
    </div>
  );
};

export default FormProgress;
