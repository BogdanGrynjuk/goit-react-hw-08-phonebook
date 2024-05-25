import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';

import { Button, Field, Form, Group, HelperText, Icon, Label } from './ContactForm.styled';
import { firstLetterCaps } from "utilities";
import { contactValidationSchema } from 'validations/contactValidation';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);  

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    try {
      await contactValidationSchema.validate({ name, number }, { abortEarly: false })
      const isDuplicateName = contacts.find(contact => {
        if (contact.name.toLowerCase() === name.toLowerCase()) return true;
        return false;
      });
    
      const isDuplicateNumber = contacts.find(contact => {
        if (contact.number === number) return true;
        return false;
      });
    
      if (isDuplicateNumber || isDuplicateName) {
        <>
          {isDuplicateName && Notify.failure(`${firstLetterCaps(name)} is already in contacts`)};
          {isDuplicateNumber && Notify.failure(`Phone number ${number} is already in your phone book`)};
        </>
        return;
      };

      dispatch(addContact({ name, number }));
      Notify.success(`${firstLetterCaps(name)} successfully added to contact list`);
      resetForm();
      
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
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Group>
          <Label>
          Name
          <Field id="name"
            type="text"
            name="name"
            placeholder="Please enter a name"
            autoComplete="name"  
          >
          </Field>
        </Label>
          <HelperText>For example: Adrian, Jacob Mercer</HelperText>
        </Group>
        <Group>
          <Label>
          Phone number
          <Field
            id="number"
            type="tel"
            name="number"
            placeholder="Please enter a phone number"
            autoComplete="tel" 
          />
        </Label>
          <HelperText>For example: +38 067 1234567</HelperText>
        </Group>        
        <Button type="submit">
          Add new contact
          <Icon />
        </Button>       
      </Form>
    </Formik>
  );
};

export default ContactForm;