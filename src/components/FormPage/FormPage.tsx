import { useFormContext } from "../../contexts/FormContext";
import Button from "../Button/Button";
import styles from "./FormPage.module.sass";

interface FormPageInterface {
  title: string;
  subtitle: string;
  content: JSX.Element;
}

export const FormPage = ({ title, subtitle, content }: FormPageInterface) => {
  const { pagination } = useFormContext();
  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {content}
      <Button text="Next Step" onClick={() => pagination.goNext()} />
    </div>
  );
};

export default FormPage;
