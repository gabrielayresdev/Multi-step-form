import { useFormContext } from "../../contexts/FormContext";
import Button from "../Button/Button";
import GoPreviousButton from "../GoPreviousButton/GoPreviousButton";
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
      <div className={styles.content}>{content}</div>
      <div className={styles.pagination_control}>
        <div>
          {pagination.page > 0 ? (
            <GoPreviousButton
              text="Go Back"
              onClick={() => pagination.goPrev()}
            />
          ) : null}
        </div>
        <Button text="Next Step" onClick={() => pagination.goNext()} />
      </div>
    </div>
  );
};

export default FormPage;
