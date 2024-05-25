import PropTypes from "prop-types";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { firstLetterCaps } from 'utilities';
import { selectContacts, selectVisibleContacts } from "redux/contacts/selectors";
import { updateContact } from "redux/contacts/operations";
import { updateFilter } from "redux/filter/filterSlice";
import { contactValidationSchema } from 'validations/contactValidation';
import { Button, Field, Form, Group, HelperText, Icon, Label } from './ContactEditor.styled';

const ContactEditor = ({ index }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const currentContact = visibleContacts[index]; 
  
  const handleSubmit = async ({ name, number }, { resetForm }) => {
    try {
      await contactValidationSchema.validate({ name, number }, { abortEarly: false })
      const isDuplicateName = contacts.find(contact => {
        if (currentContact.name.toLowerCase() === name.toLowerCase()) return false;
        return contact.name.toLowerCase() === name.toLowerCase();
      });

      const isDuplicateNumber = contacts.find(contact => {
        if (currentContact.number === number) return false;
        return contact.number === number;
      });
        
      if (isDuplicateNumber || isDuplicateName) {
        <>
          {isDuplicateName && Notify.failure(`${firstLetterCaps(name)} is already in contacts`)};
          {isDuplicateNumber && Notify.failure(`${number} is already in contacts`)};
        </>
        return;
      };

      dispatch(updateContact({ name, number, id: currentContact.id }));
      dispatch(updateFilter(""));
      Notify.success(`Contact ${firstLetterCaps(currentContact.name)} successfully changed`);
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
        name: currentContact.name,
        number: currentContact.number,
      }}
      onSubmit={handleSubmit}
    >      
      <Form>
        <Group>
          <Label>
          Edit name
          <Field id="name"
            type="text"
            name="name"
            autoComplete="name"  
            autoFocus            
          />
          </Label>
          <HelperText>For example: Adrian, Jacob Mercer</HelperText>
        </Group>

        <Group>
          <Label>
          Edit phone number
          <Field
            id="number"
            type="tel"
            name="number"
            autoComplete="tel"  
          />
          </Label>
          <HelperText>For example: +38 067 1234567</HelperText>
        </Group>       
               
        <Button type="submit" >
          Change contact
          <Icon />
        </Button>        
      </Form>      
    </Formik>
  );
};

ContactEditor.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ContactEditor;