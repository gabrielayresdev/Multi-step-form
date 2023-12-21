import usePagination from "../../hooks/usePagination";
import PageTest from "../PageTest/Index";
import styles from "./Form.module.sass";

export const Form = () => {
  const { page, goNext, goPrev } = usePagination(4);
  const content = [
    <PageTest content="page 1" />,
    <PageTest content="page 2" />,
    <PageTest content="page 3" />,
    <PageTest content="page 4" />,
  ];
  return (
    <div className={styles.wrapper}>
      <button onClick={goPrev}>Prev</button>
      {content[page]}
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default Form;
