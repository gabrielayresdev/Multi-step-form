import styles from "./FormHeader.module.sass";
interface FormHeaderInterface {
  title: string;
  subtitle: string;
}

export const FormHeader = ({ title, subtitle }: FormHeaderInterface) => {
  return (
    <div className={styles.form_header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default FormHeader;
