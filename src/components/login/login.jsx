import React from 'react';
import s from './login.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Element from '../common/formControls/formControls';

const Input = Element('input');

const Login = (props) => {
   return (
      <div className={s.form}>
         <h1>Login</h1>
         <LoginForm {...props} />
      </div>
   )
}

export const LoginForm = (props) => {
   const validationSchema = yup.object().shape({
      email: yup.string().min(5, "минимум 5 символов").email('Не email').required('Обязательно'),
      password: yup.string().min(10, "минимум 10 символов").required('Обязательно'),
   })

   return (
      <Formik
         initialValues={{ email: props.email, password: props.password }}
         validationSchema={validationSchema}
         onSubmit={(values, { setSubmitting }) => {
            props.thunkLogin(values.email, values.password, values.isAuth);
            { console.log(values.email, values.password, values.isAuth) }
            setSubmitting(false);
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
         }) => (
            <form onSubmit={handleSubmit}>
               <div className={s.inputContainer}>
                  <Field
                     component={Input}
                     errors={errors.email}
                     touched={touched.email}
                     type="email"
                     name="email"
                     id='email'
                     placeholder='Email'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.login}
                  />
               </div>
               <div className={s.inputContainer}>
                  <Field
                     component={Input}
                     errors={errors.password}
                     touched={touched.password}
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                  />
               </div>
               <div className={s.inputContainer}>
                  <Field component="input" type="checkbox" name="rememberMe" id="rememberMe" /><label htmlFor="rememberMe">remember me</label></div>
               <br />
               <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
         )}
      </Formik >
   )
}

export default Login;
