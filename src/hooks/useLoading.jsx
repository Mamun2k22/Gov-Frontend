// useLoading.js
import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return { isLoading, showLoader, hideLoader };
};

export default useLoading;
