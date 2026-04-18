// store.js: Точка збору редаксу.
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactsReducer from "./reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(contactsReducer, enhancer);