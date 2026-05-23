import { useDispatch } from "react-redux";
import "./App.css";
import AddContact from "./Components/addContact";
import ContactList from "./Components/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/contactsOperation";
// import { getContacts } from "./redux/selectors";

const App = () => {
  // state = {
  //   name: "",
  //   number: "",
  //   filter: "",
  // };
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  // const collector = (newContact) => {
  //   if (
  //     this.state.contacts.find((contact => contact.name === newContact.name))
  //   ) {
  //     alert("такий контакт уже існує");
  //     return;
  //   }
  //   newContact.id = `id-${this.state.contacts.length + 1}`;
  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };




    return (
      <div className="App">
        <h1>Phonebook</h1>
        <AddContact/>
        <h2>contacts</h2>
        <ContactList
        />
      </div>
    );
}

export default App;
