import styles from "./FormStep.module.sass";

interface StepInterface {
  order: number;
  title: string;
}

interface FormStepInterface {
  step: StepInterface;
  page: number;
  goTo: (num: number) => void;
}

export const FormStep = ({ step, page, goTo }: FormStepInterface) => {
  return (
    <div className={styles.formStep} onClick={() => goTo(step.order)}>
      <p
        className={`${styles.order} ${
          page === step.order ? styles.active : ""
        }`}
      >
        {step.order + 1}
      </p>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>STEP {step.order + 1}</p>
        <p className={styles.title}>{step.title}</p>
      </div>
    </div>
  );
};

export default FormStep;
