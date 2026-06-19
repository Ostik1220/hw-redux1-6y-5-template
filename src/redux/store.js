// store.js: Точка збору редаксу.
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import storage from "redux-persist/es/storage";
import {userReducer} from "./users/userSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// import { getDefaultNormalizer } from "@testing-library/dom";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

const persistConfig = {
  key: "token",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: persistedReducer,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

      },
    }),
});

export let persistor = persistStore(store);
