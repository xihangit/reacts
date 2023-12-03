import React,{useState} from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import  {addBook}  from './BooksSlice';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4 } from "uuid";

function AddBook() {

  const[title,setTitle]=useState("");
  const[author,setAuthor]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  

  const handleSubmit=(e)=>{
    e.preventDefault();

    const book= {id:uuidv4(), title,author};

    dispatch(addBook(book));
    navigate("/show-books",{reaplace:true});
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label htmlFor='title'>Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} required />

        </div>

        <div className="form-field">
          <label htmlFor='author'>Author</label>
          <input type="text" id="auhtor" name="author" value={author} onChange={(e)=> setAuthor(e.target.value)} required />

        </div>
<button type="submit">addBook</button>
      </form>
    </div>
  )
}

export default AddBook