import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/contactsOperation";

const AddContact = () => {
  const dispatch = useDispatch();

  const collectingInput = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value.trim();
    const number = event.target.elements.number.value.trim();

    if (!name || !number) return;

    dispatch(addContact({ name, number }));
    event.target.elements.name.value = "";
    event.target.elements.number.value = "";
  };

  return (
    <div className="card-form">
      <h2>Add new contact</h2>
      <form onSubmit={collectingInput} className="stack-form">
        <div className="input-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Jane Doe"
          />
        </div>

        <div className="input-group">
          <label htmlFor="contact-number">Phone number</label>
          <input
            id="contact-number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+38 (099) 123-45-67"
          />
        </div>

        <button className="primary-btn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
