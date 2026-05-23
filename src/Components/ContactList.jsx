import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/contacts/contactsSelector";
import { getFilter } from "../redux/filter/filterSelector"; 
import { changeFilter } from "../redux/filter/filterSlice";
// import { removeContact } from "../redux/contacts/contactsSlice";
import { deleteContact } from "../redux/contacts/contactsOperation";

const ContactList = () => {


  const contacts =  useSelector(getContacts);
const filter = useSelector(getFilter)
  console.log(contacts, filter)

    const dispatch = useDispatch();
  

  const valueCollector = (event) => {
    console.log(event.target.value)
    dispatch(changeFilter(event.target.value))
  };

  const deletionHandler = (contactId) => {
    console.log(contactId);
    dispatch(deleteContact(contactId));
  };

    return (
      <>
        <input type="text" onChange={valueCollector} />
        <ul>
  {(filter === ""
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
  ).map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button onClick={() => deletionHandler(contact.id)}>
        delete contact
      </button>
    </li>
  ))}
</ul>
      </>
    );
}

export default ContactList;
