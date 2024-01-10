import { useFormContext } from "../../contexts/FormContext";
import Button from "../Button/Button";
import GoPreviousButton from "../GoPreviousButton/GoPreviousButton";
import styles from "./FooterPaginationControl.module.sass";

interface button {
  text?: string;
  onClick?: VoidFunction;
  style?: CSSModuleClasses[string] | null;
}

interface FooterPaginationControlInterface {
  button1?: button;
  button2?: button;
}

export const FooterPaginationControl = ({
  button1,
  button2,
}: FooterPaginationControlInterface) => {
  const { pagination } = useFormContext();

  button1 =
    button1?.text && button1.onClick
      ? button1
      : { text: "Go back", onClick: pagination.goPrev };
  button2 =
    button2?.text && button2.onClick
      ? button2
      : { text: "Next Step", onClick: pagination.goNext };

  return (
    <div className={styles.pagination_control}>
      <div>
        {pagination.page > 0 ? (
          <GoPreviousButton text={button1.text!} onClick={button1.onClick} />
        ) : null}
      </div>
      <Button
        text={button2.text!}
        styles={button2.style ? button2.style : null}
        onClick={button2.onClick}
      />
    </div>
  );
};

export default FooterPaginationControl;
