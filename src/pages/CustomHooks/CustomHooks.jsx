import React, { useState } from "react";
import useCount from "./useCount";

const CustomHooks = () => {
  const { count, handleIncrease, handleDecrease } = useCount();
  return (
    <div className="container my-32">
      CustomHooks
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
    </div>
  );
};

export default CustomHooks;
