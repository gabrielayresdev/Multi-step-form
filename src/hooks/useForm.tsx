import React from "react";

interface ValidationInterface {
  pattern: RegExp;
  message: string;
}

export interface UseFormInterface {
  value: string;
  error: string | null;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
}

const useForm = (required: boolean, validation?: ValidationInterface[]) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validateAtEachChangeIfThereIsAnError() {
    if (error) validate();
  }

  function validate() {
    console.log("validando");
    if (validation) {
      validation.forEach(({ pattern, message }) => {
        if (!pattern.test(value)) {
          setError(message);
          console.log(message);
          return false;
        }
      });
    }
    if (required) {
      if (value.length === 0) {
        setError("This field can't be empty");
        return false;
      }
    }
    setError(null);
    return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  React.useEffect(validateAtEachChangeIfThereIsAnError, [
    value,
    validateAtEachChangeIfThereIsAnError,
  ]);

  return { value, error, onChange, validate: () => validate() };
};

export default useForm;
