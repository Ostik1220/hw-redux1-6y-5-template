import "./App.css";
import { HeroPage } from "./pages/HeroPage";
import { WelcomingPage } from "./pages/WelcomingPage";
// import { getContacts } from "./redux/selectors";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { PrivateRoute } from "./utilities/routes/privateRoute";
import { PublicRestrictedRoute } from "./utilities/routes/publicRoute";

const App = () => {
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
     <Routes>
       <Route path="/" element={<PublicRestrictedRoute restricted><WelcomingPage /></PublicRestrictedRoute>} />
       <Route path="/list" element={<PrivateRoute><HeroPage /></PrivateRoute>} />
    </Routes>
    );
}

export default App;
