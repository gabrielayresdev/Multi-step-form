import React from "react";
import useForm, { UseFormInterface } from "../hooks/useForm";
import usePagination, { UsePaginationInterface } from "../hooks/usePagination";

interface FormContextInterface {
  name: UseFormInterface;
  email: UseFormInterface;
  number: UseFormInterface;
  pagination: UsePaginationInterface;
}

const FormContext = React.createContext<FormContextInterface | null>(null);

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) throw new Error("formContext must be inside provider");
  else return context;
};

const FormContextProvider = ({ children }: React.PropsWithChildren) => {
  const name = useForm(true);
  const email = useForm(true, [
    {
      pattern: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
      message: "This Email is not valid",
    },
  ]);
  const number = useForm(true, [
    {
      pattern: /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}/,
      message: "This number is not valid",
    },
  ]);
  const pagination = usePagination(4);
  return (
    <FormContext.Provider value={{ name, email, number, pagination }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
