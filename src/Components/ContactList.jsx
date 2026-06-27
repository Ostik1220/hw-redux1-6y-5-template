import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/contacts/contactsSelector";
import { getFilter } from "../redux/filter/filterSelector";
import { changeFilter } from "../redux/filter/filterSlice";
import { ContactItem } from "./ContactItem";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const valueCollector = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts =
    filter === ""
      ? contacts
      : contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="contact-panel">
      <div className="panel-heading">
        <h2>Contacts</h2>
        <p>Search and manage your people in one place.</p>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={valueCollector}
      />

      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
