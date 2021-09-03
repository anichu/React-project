import useInput from '../hooks/use-input-basic';

const BasicForm = (props) => {
  const {
    value: fnValue,
    hasError: fnHasError,
    blurHandler: fnBlurHandelr,
    changeHandler: fnChangeHandler,
    isvalid: fnIsValid,
    reset: fnReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lnValue,
    hasError: lnHasError,
    blurHandler: lnBlurHandelr,
    changeHandler: lnChangeHandler,
    isvalid: lnIsValid,
    reset: lnReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    hasError: emailHasError,
    blurHandler: emailBlurHandelr,
    changeHandler: emailChangeHandler,
    isvalid: emailIsValid,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (fnIsValid && lnIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fnIsValid) {
      return;
    }
    fnReset();
    lnReset();
    emailReset();
    console.log(fnValue);
  };

  const fnClasses = fnHasError ? 'form-control invalid' : 'form-control';
  const lnClasses = lnHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={fnChangeHandler}
            onBlur={fnBlurHandelr}
            value={fnValue}
          />
          {fnHasError && (
            <p className='error-text'>First Name Must not be empty.</p>
          )}
        </div>
        <div className={lnClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lnChangeHandler}
            onBlur={lnBlurHandelr}
            value={lnValue}
          />
          {lnHasError && (
            <p className='error-text'>Last Name Must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandelr}
          value={emailValue}
        />
        {emailHasError && (
          <p className='error-text'>Please,give a valid email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
