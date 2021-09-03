import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setenteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setenteredValue('');
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
