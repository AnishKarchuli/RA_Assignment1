import { useState, useEffect } from "react";

export const useLogger = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(`Value changed to: ${value}`);
  }, [value]);
  return { value, setValue };
};
