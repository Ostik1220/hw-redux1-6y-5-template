import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";


const AddContact = () => {
  // state = {
  //   name: "",
  //   number: "",
  // };
    const dispatch = useDispatch()

  const collectingInput = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value
   dispatch(addContact({name, number}))
    event.target.elements.name.value = "";
    event.target.elements.number.value = "";
  };

  


    return (
      <form onSubmit={collectingInput}>
        <h2>Add new contact</h2>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
}

export default AddContact;
