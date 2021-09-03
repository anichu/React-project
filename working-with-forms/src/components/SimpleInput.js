import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control ';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Please, Enter a valid email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
