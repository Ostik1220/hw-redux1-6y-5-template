import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logOutUser } from "./usersOperation";

 const userSlice = createSlice({
    name: "user",
    initialState:{
        token: "",
        user:{
            email: "",
            id: null
        },
        error: null,
        login: false
    },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = action.payload.accessToken
      state.user = action.payload.user
      state.login = true
    }); 
builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = action.payload.accessToken
      state.user = action.payload.user

    });
  builder.addCase(logOutUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = ""
      state.user = { email: null, id: null}
      state.login = false
    });}})

    export const userReducer = userSlice.reducer