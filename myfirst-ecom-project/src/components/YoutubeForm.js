import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required !'),
  email: Yup.string().email('Invalid email format ').required('Required !'),
  channel: Yup.string().required('Required !'),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className='form'
    >
      <Form className='form'>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />

          <ErrorMessage name='name' className='error' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel'>
            {(errorMessage) => <div className='error'>{errorMessage}</div>}
          </ErrorMessage>
        </div>
        <div className='form-control'>
          <label htmlFor='comments'>Comment</label>
          <Field as='textarea' name='comments' id='comments' />
          <ErrorMessage name='comments' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>Facebook Profile</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        <div className='form-control'>
          <label htmlFor='twitter'>Twitter Profile</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>
        <div className='form-control'>
          <label htmlFor='pN'>Primary Number</label>
          <Field type='text' id='pN' name='phoneNumbers[0]' />
        </div>
        <div className='form-control'>
          <label htmlFor='sN'>Secondary Number</label>
          <Field type='text' id='sN' name='phoneNumbers[1]' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
