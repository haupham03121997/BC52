import React, { useEffect, useRef, useState } from "react";
import FormRef from "./FormRef";

function DemoRef() {
  const inputRef = useRef();
  const fileInputRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    // console.log("inputRef", inputRef.current.value);
    // inputRef.current.focus();
  }, []);

  const handleSubmit = (values) => {
    // email , password
    console.log("values", values);
    // call api login
  };
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="my-5">
        <button
          onClick={handleIncrease}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Increase
        </button>
        <p className="my-2">Count: {count}</p>
        <button
          onClick={handleDecrease}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Decrease
        </button>
      </div>
      <h2 className="mb-5">Form Ref</h2>
      <FormRef onSubmit={handleSubmit} ref={formRef} />
      <button
        onClick={() => formRef.current.requestSubmit()}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Login
      </button>
    </div>
  );
}

export default DemoRef;
