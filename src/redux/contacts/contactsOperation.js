import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001"

const getAuthHeader = (token) => {
  return { Authorization: `Bearer ${token}` };
}


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`${baseUrl}/contacts`, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = fetchData.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const addedData = await axios.post(`${baseUrl}/contacts`, {
                name: contactData.name,
                number: contactData.number,

            }, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = addedData.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl}/contacts/${id}`, {
        headers: getAuthHeader(thunkAPI.getState().user.token),
      });
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);




