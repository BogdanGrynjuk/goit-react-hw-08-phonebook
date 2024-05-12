import * as Yup from 'yup';

export const nameSchema = Yup.string().required('Name is required');

export const emailSchema = Yup.string()
  .email('Invalid email')
  .required('Email is required');

export const passwordSchema = Yup.string()
  .required('Password is required')
  .min(7, 'Password must be at least 7 characters')
  .matches(
    /^(?=.*[A-Za-zА-Яа-я])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
    'Password must contain at least one uppercase letter, one special character (!@#$%^&*), and one number'
  );

export const registerValidationSchema = Yup.object().shape({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginValidationSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
