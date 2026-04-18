import { Component } from "react";
import { getContacts, getFilter } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { filterContact, removeContact } from "../redux/actions";

const ContactList = () => {
  // state = {
  //   filter: "",
  // };

  const contacts =  useSelector(getContacts);
const filter = useSelector(getFilter)
  console.log(contacts, filter)

    const dispatch = useDispatch();
  

  const valueCollector = (event) => {
    dispatch(filterContact(event.target.value))
  };

  const deletionHandler = (contactId) => {
    console.log(contactId);
    dispatch(removeContact(contactId));
  };

    return (
      <>
        <input type="text" onChange={valueCollector} />
        <ul>
          {contacts.map((contact) =>
            contact.name
              .toLowerCase()
              .includes(filter.toLowerCase()) ? (
              <li key={contact.id}>
                {contact.name} : {contact.number}
                <button onClick={() => deletionHandler(contact.id)}>delete contact</button>
              </li>
            ) : null
          )}
        </ul>
      </>
    );
}

export default ContactList;
