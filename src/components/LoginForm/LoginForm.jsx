import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { logIn } from 'redux/auth/operations';
import { loginValidationSchema } from 'validations/authValidation';
import { Form, Label, Field, Button, Icon } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    try {
      await loginValidationSchema.validate({ email, password }, { abortEarly: false })
      dispatch(logIn({ email, password }));
    } catch (error) {
      error.inner.forEach(err => {
        Notify.failure(err.message);
      });
    }
  };  

  return (  
    <Formik
      initialValues={{        
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>        
        <Label>
          Email
          <Field id='email'
            type="email"
            name="email"
            placeholder="Please enter your email address"            
          />
        </Label>
        <Label>
          Password
          <Field id='password'
            type="password"
            name="password"
            placeholder="Please enter your password"
          />
        </Label>
        <Button type="submit">
          Log In
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;