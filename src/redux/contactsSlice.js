import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            name: values.name,
            number: values.number,
            id: nanoid(3),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
};

const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
