import { ACTION_TYPES } from "./constants";

// reducer.js: Логіка обробки (мозок нашого проекту).
const contacts = {
  contacts: [],
  filter: ""
};

const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return { ...state, contacts: [...state.contacts, action.payload] };
      case ACTION_TYPES.remove:
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
        case ACTION_TYPES.filter:
            return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
