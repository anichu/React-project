import { useState } from 'react';

const useInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [touch, setTouch] = useState(false);
  const errorInput = validateValue(value);
  const hasError = !errorInput && touch;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setTouch(true);
  };

  const reset = () => {
    setValue('');
    setTouch(false);
  };
  return {
    value,
    isvalid: errorInput,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
