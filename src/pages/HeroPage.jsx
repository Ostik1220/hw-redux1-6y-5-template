import { useDispatch } from "react-redux";
import AddContact from "../Components/addContact";
import ContactList from "../Components/ContactList";
import { logOutUser } from "../redux/users/usersOperation";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOperation";

export const HeroPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className="dashboard-shell">
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">Contacts hub</p>
          <h1>Phonebook</h1>
        </div>
        <button className="secondary-btn" onClick={() => dispatch(logOutUser())}>
          Log out
        </button>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <AddContact />
        </div>

        <div className="panel">
          <ContactList />
        </div>
      </section>
    </main>
  );
};