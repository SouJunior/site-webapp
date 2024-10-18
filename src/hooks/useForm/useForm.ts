import { useState } from "react";

const useForm = <T extends {}>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
};

export default useForm;
