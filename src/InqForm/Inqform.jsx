import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { jsPDF } from "jspdf";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required njnjn')
    .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Inqform = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: 'jnj',
        lastName: '',
        email: '',
      }}

      validationSchema={SignupSchema}
      onSubmit={values => {
       const doc = new jsPDF();

doc.text(values.email, 10, 10);
doc.save("a4.pdf");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Inqform