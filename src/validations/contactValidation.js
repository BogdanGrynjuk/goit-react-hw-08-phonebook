import * as Yup from 'yup';

export const nameSchema = Yup.string()
  .required('Name is required')
  .matches(
    /^[a-zA-Zа-яА-Яії]+(([' -][a-zA-Zа-яА-Яії ])?[a-zA-Zа-яА-Яії]*)*$/,
    'Name may contain only letters, apostrophe, dash and spaces'
  );

export const phoneSchema = Yup.string()
  .required('Phone number is required')
  .matches(
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be between 7 and 15 digits and can contain spaces, dashes, parentheses, and an optional leading +'
  );

export const contactValidationSchema = Yup.object().shape({
  name: nameSchema,
  number: phoneSchema,
});
