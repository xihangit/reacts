import React,{ useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {fetchPosts}  from "./postSlice";

const PostsView = () => {
  const {isLoading,posts,error} =useSelector((state)=>state.posts);
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch] );

  return (
    <div>
      
      <h1>PostsView</h1>
      {isLoading && <h3>Loading.......</h3>}
      {error && <h3>{error}</h3>}

      
      <section>
          
      {posts && posts.map((post) => {
          return (
          
            <div key={post.id}>
              <h3>{post.id}</h3>
                <h5>{post.title}</h5>
            
            
            </div>
          

          );
        })};
           
      </section>
      
      
      
    </div>
  );
};

export default PostsView;
