import { deleteContact } from "../redux/contacts/contactsOperation";
import { useDispatch } from "react-redux";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deletionHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className="contact-item">
      <div>
        <strong>{contact.name}</strong>
        <span>{contact.number}</span>
      </div>
      <button className="danger-btn" onClick={() => deletionHandler(contact.id)}>
        Delete
      </button>
    </li>
  );
};
