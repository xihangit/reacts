import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';


function EditBook() {
  
const dispatch=useDispatch();

  const location=useLocation();
  console.log(location);

  const navigate=useNavigate();

  const[id,setId]=useState(location.state.id);
  const[title,setTitle]=useState(location.state.id);
  const[author,setAuthor]=useState(location.state.id);

  const handleSubmit=(e)=>{
e.preventDefault();
 {id,title,author};
 dispatch(updateBook({id,title,author}));
 navigate("/show-books",{reaplace:true});
  }


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
<button type="submit">updateBook</button>
</form>
</div>
  
  )
};

export default EditBook;