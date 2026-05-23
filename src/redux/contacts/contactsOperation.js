import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://6a11a6cc3e35d0f37ee37e41.mockapi.io"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`${baseUrl}/contacts`);
      const data = fetchData.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const addedData = await axios.post(`${baseUrl}/contacts`, contactData);
      const data = addedData.data;
      console.log("Data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl}/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);