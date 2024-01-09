import styles from "./Button.module.sass";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styles: CSSModuleClasses[string] | null;
  onClick?: VoidFunction;
}

export const Button = ({
  text,
  onClick,
  styles: aditionalStyles,
  ...args
}: ButtonInterface) => {
  return (
    <button
      className={`${styles.button} ${aditionalStyles}`}
      onClick={onClick}
      {...args}
    >
      {text}
    </button>
  );
};

export default Button;
