import { useDispatch, useSelector } from "react-redux";

import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
  selectContacts
} from "redux/contacts/selectors";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Message from "components/Message/Message";
import Loader from "components/Loader/Loader";
import Contacts from "components/Contacts/Contacts";
import ContactForm from "components/ContactForm/ContactForm";
// import PhoneBook from "components/PhoneBook/PhoneBook";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import ContactsCounter from "components/ContactsCounter/ContactsCounter";

import PhoneBook from "components/PhoneBoock";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError); 
  const countVisibleContacts = useSelector(selectVisibleContacts).length;
  const countContacts = useSelector(selectContacts).length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBook>
      <ContactForm />
      <Contacts>
        {isLoading && <Loader text={'Loading contacts...'} />}
        {error && <Message message={error} />}
        {!isLoading && countContacts > 1 && <Filter />}
        {!isLoading && countContacts > 0 &&
          <>
            <ContactsCounter
              visibleContacts={countVisibleContacts}
              tatalContacts={countContacts}
            />
            <ContactList />
          </>
        }
        {!isLoading && countContacts === 0 &&
          <Message message="There are no contacts in your phone book" />
        }
      </Contacts>
    </PhoneBook>
  );
};