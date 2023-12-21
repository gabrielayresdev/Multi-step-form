import styles from "./PageTest.module.sass";

export const PageTest = ({ content }: { content: string }) => {
  return <div className={styles.wrapper}>{content}</div>;
};

export default PageTest;
