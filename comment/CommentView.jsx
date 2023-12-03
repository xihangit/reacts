import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {getCommnent}  from './commentSlice';

function CommentView() {
    const dispatch=useDispatch();
    const {comments}=useSelector((state)=>state.comments);
    console.log(comments);

    useEffect(() => {
      dispatch(getCommnent());
    }, [dispatch]);
    

  return (
    <div>   
        commentView

       {comments && comments.map((comment,i)=><h1 key={i}>{comment.name}</h1>)}
    
        

    </div>
  )
}

export default CommentView;