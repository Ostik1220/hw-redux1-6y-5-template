import { useDispatch } from "react-redux";
import AddContact from "../Components/addContact"
import ContactList from "../Components/ContactList"
import { logOutUser } from "../redux/users/usersOperation";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOperation";


export const HeroPage = () =>{

          const dispatch = useDispatch();
          
useEffect(() => {
    dispatch(fetchContacts());
  }, []);


    return( <>        <h1>Phonebook</h1>
    <button onClick={() => {dispatch(logOutUser())}}>Log out</button>
        <AddContact/>
        <h2>contacts</h2>
        <ContactList/></>
    )
}