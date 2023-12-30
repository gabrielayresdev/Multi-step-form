import React from "react";
import useForm, { UseFormInterface } from "../hooks/useForm";
import usePagination, { UsePaginationInterface } from "../hooks/usePagination";

interface FormContextInterface {
  name: UseFormInterface;
  email: UseFormInterface;
  number: UseFormInterface;
  pagination: UsePaginationInterface;
  plan: PlanInterface;
  setPlan: React.Dispatch<React.SetStateAction<PlanInterface>>;
  plans: PlanInterface[];
  billingFrequency: "monthly" | "yearly";
  setBillingFrequency: React.Dispatch<
    React.SetStateAction<"monthly" | "yearly">
  >;
  addOns: AddOnsInterface[];
  setAddOns: React.Dispatch<React.SetStateAction<AddOnsInterface[]>>;
}

export interface PlanInterface {
  name: string;
  dollarsPerMonth: number;
}

export interface AddOnsInterface {
  title: string;
  price: number;
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
      pattern:
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      message: "This number is not valid",
    },
  ]);
  const pagination = usePagination(4);
  const plans = [
    {
      name: "arcade",
      dollarsPerMonth: 9,
    },
    {
      name: "advanced",
      dollarsPerMonth: 12,
    },
    {
      name: "pro",
      dollarsPerMonth: 15,
    },
  ];
  const [plan, setPlan] = React.useState<PlanInterface>(plans[0]);
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "yearly"
  >("monthly");
  const [addOns, setAddOns] = React.useState<AddOnsInterface[]>([]);

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        number,
        pagination,
        plan,
        setPlan,
        plans,
        billingFrequency,
        setBillingFrequency,
        addOns,
        setAddOns,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
