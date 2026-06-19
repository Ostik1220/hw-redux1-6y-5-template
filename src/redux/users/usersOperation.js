import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const createUser = createAsyncThunk(
  "users/createUser",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: obj.email,
        password: obj.password,
      });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: obj.email,
        password: obj.password,
      });
      const data = response.data;
      console.log(data);
      axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
                        console.log(thunkAPI.getState(), data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "users/logOutUser",
  async (obj, thunkAPI) => {
    console.log(thunkAPI.getState())
    localStorage.removeItem("token");
    axios.defaults.headers.common.Authorization = "";
  }
);
