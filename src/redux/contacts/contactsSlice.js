import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperation";



const contactsSlice = createSlice({
    name: "contacts",

 initialState: {
    loading: false,
    error: null,
    contacts: [],
  },

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
      state.contacts = action.payload;
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
      state.contacts.push(action.payload);
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
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    });

    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    }


});

// export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;