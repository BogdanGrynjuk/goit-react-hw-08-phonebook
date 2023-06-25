import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations"; 
import { Button, Contact, Icon, Text } from "./ContactItem.styled";
import { updateFilter } from "redux/filter/filterSlice";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { firstLetterCaps } from "utilities";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(""));
    Notify.info(`${firstLetterCaps(name)} successfully removed from contacts`);
  };
  
  return (
    <Contact key={id}>
      <Text>{name}: {number}</Text>
      <Button type="button" onClick={handleDelete}>
        Delete
        <Icon/>
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,  
};

export default ContactItem;