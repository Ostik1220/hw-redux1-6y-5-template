import { deleteContact } from "../redux/contacts/contactsOperation";
import { useDispatch } from "react-redux";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deletionHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button onClick={() => deletionHandler(contact.id)}>
        delete contact
      </button>
    </li>
  );
};
