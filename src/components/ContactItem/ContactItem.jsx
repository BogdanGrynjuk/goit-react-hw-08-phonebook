import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { updateFilter } from "redux/filter/filterSlice";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Modal from "components/Modal";
import ContactEditor from "components/ContactEditor";
import { firstLetterCaps } from "utilities";

import { Button, Contact, Controls, IconDelete, IconEdit, Info, Name, NameWrapper, PhoneNumber } from "./ContactItem.styled";

const ContactItem = ({ id, name, number, index }) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(""));
    Notify.info(`${firstLetterCaps(name)} successfully removed from contacts`);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const nameElement = nameRef.current;
    if (nameElement.scrollWidth > nameElement.clientWidth) {
      nameElement.classList.add("marquee");
    } else {
      nameElement.classList.remove("marquee");
    }
  }, [name, number]);

  return (
    <Contact key={id}>

      <Info activeButton={activeButton}>
        <NameWrapper>
          <Name ref={nameRef}>
            <span>{name}</span>
          </Name>
        </NameWrapper>
        <PhoneNumber>{number}</PhoneNumber>
      </Info>      

      <Controls>
        <Button
          type="button"
          onClick={toggleModal}
          onMouseEnter={() => setActiveButton('edit')} 
          onMouseLeave={() => setActiveButton(null)}
        >
          <IconEdit className="icon_edit" />
        </Button>
        <Button
          type="button"
          onClick={handleDelete}
          onMouseEnter={() => setActiveButton('delete')} 
          onMouseLeave={() => setActiveButton(null)}
        >
          <IconDelete className="icon_delete"/>
        </Button>
      </Controls>
      
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h1>Edit contact</h1>
          <ContactEditor index={index} />
        </Modal>
      )}
      
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactItem;