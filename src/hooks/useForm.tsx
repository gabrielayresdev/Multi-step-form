import React from "react";

interface ValidationInterface {
  pattern: RegExp;
  message: string;
}

const useForm = (required: boolean, validation?: ValidationInterface[]) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validateAtEachChangeIfThereIsAnError() {
    console.log("oi");
    if (error) validate();
  }

  function validate() {
    if (required) {
      value.length > 0 ? setError(null) : setError("This field can't be empty");
      return value.length > 0;
    }
    if (validation) {
      validation.forEach(({ pattern, message }) => {
        if (!pattern.test(value)) {
          setError(message);
          return false;
        }
      });
    }
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
