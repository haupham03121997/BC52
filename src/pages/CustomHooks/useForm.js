import { useState } from "react";

function useForm(defaultValues) {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormValues(() => ({ ...formValues, [name]: value }));
  };

  return { formValues, handleOnchange };
}

export default useForm;
