// actions.js: Створює події які мають відбутись на вашому сайті.

import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";

// Return type,payload
export const addContact = text => {
  return {
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const removeContact = id => {
  return {
    type: ACTION_TYPES.remove,
    payload: id
  };
};

export const filterContact = id => {
  return {
    type: ACTION_TYPES.filter,
    payload: id
  };
};