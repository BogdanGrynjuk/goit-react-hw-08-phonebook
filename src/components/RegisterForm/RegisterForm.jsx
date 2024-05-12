import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { register } from 'redux/auth/operations';
import { registerValidationSchema } from 'validations/authValidation';
import { Form, Label, Field, Button, Icon } from './RegisterForm.styled';

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
        <Label>
          User name
          <Field id='name'
            type="text"
            name="name"
            placeholder="Please enter your name"            
          />
        </Label>
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
          Register
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
