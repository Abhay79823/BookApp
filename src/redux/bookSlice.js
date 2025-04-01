import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/books.json"; 

const bookSlice = createSlice({
    name: "books",
    initialState: booksData.booksData, 
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

