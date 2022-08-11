import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/contacts";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer
    }
});
