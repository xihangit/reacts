
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../rares/Navbar";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AddBook from "../leares/books/AddBook";
import BooksView from "../leares/books/BooksView";
import EditBook from "../leares/books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Error />} />


        <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />

          <Route path="/edit-book" element={< EditBook />} />

          
          </Routes>
      
    </BrowserRouter>
  );
};

export default Index;