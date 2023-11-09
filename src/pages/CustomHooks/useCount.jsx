import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return { count, handleDecrease, handleIncrease };
}

export default useCount;
