import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format.').required('Required!'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short -should be 6 chars minimum'),
});

const Signup = ({ setSignUp, signUp, setSignIn }) => {
  const [err, setErr] = useState('');
  const onSubmit = (values) => {
    let signIndex = signUp.findIndex((auth) => auth.email === values.email);
    let signAuth = signUp[signIndex];
    if (signAuth) {
      setErr('User is Exists!');
    } else {
      setSignUp([...signUp, values]);
      setErr('');
      setSignIn(true);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <StyledForm>
      <form onSubmit={formik.handleSubmit}>
        <h4>Signup Form</h4>
        {err ? <p>{err}</p> : ''}
        <hr />
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : (
            ''
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.name}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'> {formik.errors.email}</div>
          ) : (
            ''
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.name}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : (
            ''
          )}
        </div>
        <button type='submit'>submit</button>
      </form>
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
    color: white;
    margin-bottom: 0.7rem;
  }
  p {
    text-align: center;
    color: red;
    margin: 0.3rem 0rem;
  }
`;

export default Signup;
