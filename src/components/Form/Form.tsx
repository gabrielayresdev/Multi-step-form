import usePagination from "../../hooks/usePagination";
import FormProgress from "../FormProgress/FormProgress";
import PageTest from "../PageTest/PageTest";
import PersonalForm from "../PersonalForm/PersonalForm";
import styles from "./Form.module.sass";

export const Form = () => {
  const { page, goTo } = usePagination(4);
  const content = [
    <PersonalForm />,
    <PageTest content="page 2" />,
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
