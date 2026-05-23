// store.js: Точка збору редаксу.
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import storage from "redux-persist/es/storage";

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
  key: "contacts",
  storage,
  whitelist: ["contacts"]
};

console.log(persistConfig)

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

      },
    }),
});

console.log(store);

export let persistor = persistStore(store)