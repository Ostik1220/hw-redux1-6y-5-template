import { createSelector } from "@reduxjs/toolkit";
import { selectAll } from "./contactsSlice";

// export const getContacts = (state) =>state.contacts.contacts;
export const selectContacts = (state) => selectAll(state);
export const getContacts = createSelector([selectContacts], (contacts) => contacts);