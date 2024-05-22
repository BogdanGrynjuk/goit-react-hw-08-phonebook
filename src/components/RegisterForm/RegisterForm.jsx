import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { register } from 'redux/auth/operations';
import { registerValidationSchema } from 'validations/authValidation';
import { Form, Label, Field, Button, Icon, Group, HelperText } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({name, email, password}) => {  
    try {
      await registerValidationSchema.validate({name, email, password }, { abortEarly: false });
      dispatch(register({ name, email, password }));     
    } catch (error) {
      error.inner.forEach(err => {
        Notify.failure(err.message);
      });
    }
  };

  return (     
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Group>
           <Label>
          User name
          <Field id='name'
            type="text"
            name="name"
            placeholder="Please enter your name"
            autoComplete="username"
          />
          </Label>
          <HelperText>For example: Adrian, Jacob Mercer</HelperText>
        </Group>
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
          Register
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
