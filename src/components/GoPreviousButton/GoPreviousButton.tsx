import styles from "./GoPreviousButton.module.sass";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: VoidFunction;
}

export const GoPreviousButton = ({
  text,
  onClick,
  ...args
}: ButtonInterface) => {
  return (
    <button className={styles.button} onClick={onClick} {...args}>
      {text}
    </button>
  );
};

export default GoPreviousButton;
