import styles from "./Button.module.sass";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: VoidFunction;
}

export const Button = ({ text, onClick, ...args }: ButtonInterface) => {
  return (
    <button className={styles.button} onClick={onClick} {...args}>
      {text}
    </button>
  );
};

export default Button;
