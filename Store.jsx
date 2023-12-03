import { configureStore } from "@reduxjs/toolkit"


import booksReducer from "./leares/books/BooksSlice";

const Store = configureStore({
  reducer: {
    
  
    
    booksReducer:booksReducer,
  
  
  },
});
export default Store;
