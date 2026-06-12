import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperation";
import { createEntityAdapter } from '@reduxjs/toolkit'


const contactsAdapter = createEntityAdapter();
const contactsSlice = createSlice({
    name: "contacts",

 initialState: contactsAdapter.getInitialState({
    loading: false,
    error: null,
    contacts: [],
  }),

    // reducers: {
    //     addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },

    //     prepare({name, number}) {
    //         return {
    //             payload: {
    //                 id: `id-${Math.random()}`,
    //                 name,
    //                 number
    //             }
    //         }
    
    // }},
    //     removeContact: {
    //   reducer(state, action) {
    //     return state.filter((contact) => contact.id !== action.payload);
    //   }, 

    //   prepare(id) {
    //     return {payload: id};
    //   }

    // },
    // },

    extraReducers: (builder) => {
builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      contactsAdapter.setAll(state, action.payload);
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addContact.pending, (state) => {
      state.loading = true;

    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      contactsAdapter.addOne(state, action.payload);
    });

    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteContact.pending, (state) => {
      state.loading = true;

    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      contactsAdapter.removeOne(state, action.payload.id);
    });

    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    }


});
export const {selectAll, selectById, selectIds} = contactsAdapter.getSelectors(
  (state) => state.todos)
// export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;