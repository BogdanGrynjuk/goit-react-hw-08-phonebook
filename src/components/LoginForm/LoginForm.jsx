import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { logIn } from 'redux/auth/operations';
import { loginValidationSchema } from 'validations/authValidation';
import { Form, Label, Field, Button, Icon, Group, HelperText } from './LoginForm.styled';

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
        <Group>
          <Label>
          Email
          <Field id='email'
            type="email"
            name="email"
            placeholder="Please enter your email address"
           autoComplete="email"
          />
        </Label>
          <HelperText>Enter a valid email address</HelperText>
        </Group>
        <Group>
          <Label>
          Password
          <Field id='password'
            type="password"
            name="password"
            placeholder="Please enter your password"
            autoComplete="current-password"
          />
          </Label>
           <HelperText>Password must contains min 7 charecters</HelperText>
        </Group>        
        <Button type="submit">
          Log In
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;