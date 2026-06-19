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
    console.log(event.target.value);
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <input type="text" onChange={valueCollector} />
      <ul>
        {(filter === ""
          ? contacts
          : contacts.filter((contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase()),
            )
        ).map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
