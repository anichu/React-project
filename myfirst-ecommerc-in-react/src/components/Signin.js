import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required !'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short -should be 6 chars minimum'),
});

const Signin = ({ signIn, signUp, setSignIn }) => {
  const [err, setErr] = useState('');

  const onSubmit = (values) => {
    let signIndex = signUp.findIndex((item) => item.email === values.email);
    let signAuth = signUp[signIndex];

    if (signAuth) {
      if (values.password === signAuth.password) {
        setSignIn(true);
        setErr('SignIn in success go to home page!');
      } else {
        setErr('Wrong email or password!');
      }
    } else {
      setErr('User is not exists! try to signUp!');
    }
  };

  return (
    <StyledForm>
      <h4>Signin</h4>
      {err ? <p>{err}</p> : ''}
      <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' />
            <ErrorMessage name='email'>
              {(errorMessage) => <div className='error'>{errorMessage}</div>}
            </ErrorMessage>
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <Field type='password' id='password' name='password' />
            <ErrorMessage name='password'>
              {(err) => <div className='error'>{err}</div>}
            </ErrorMessage>
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-size: 1.2rem;
  background-color: whitesmoke;
  input {
    display: block;
    font-size: 1.5rem;
    width: 500px;
    padding: 0.3rem 0rem;
    text-indent: 0.4rem;
    background-color: whitesmoke;
    border: 1px solid #003049;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  button {
    font-size: 1.3rem;
    padding: 0.5em 1em;
    cursor: pointer;
  }
  .error {
    color: red;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.2rem;
    font-size: 1.8rem;
  }
  hr {
    color: whitesmoke;
    margin-bottom: 1.5rem;
    width: 70%;
  }
  p {
    margin: 0.4rem 0rem;
  }
`;

export default Signin;
