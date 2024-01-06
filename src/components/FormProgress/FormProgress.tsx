import { useFormContext } from "../../contexts/FormContext";
import FormStep from "../FormStep/FormStep";
import styles from "./FormProgress.module.sass";

interface FormProgressInterface {
  page: number;
  goTo: (num: number) => void;
}

export const FormProgress = ({ page, goTo }: FormProgressInterface) => {
  const { name, email, number } = useFormContext();

  function changePage(page: number) {
    if (page === 0) {
      const fields = [name, email, number];
      const valid = fields.reduce(
        (bool, current) => current.validate() && bool,
        true
      );
      if (valid) goTo(page);
    }
  }

  return (
    <div className={styles.formProgress}>
      <FormStep
        step={{ order: 0, title: "your info" }}
        page={page}
        goTo={() => changePage(0)}
      />
      <FormStep
        step={{ order: 1, title: "select plan" }}
        page={page}
        goTo={() => changePage(2)}
      />
      <FormStep
        step={{ order: 2, title: "add-ons" }}
        page={page}
        goTo={() => changePage(3)}
      />
      <FormStep
        step={{ order: 3, title: "summary" }}
        page={page}
        goTo={() => changePage(4)}
      />
    </div>
  );
};

export default FormProgress;
