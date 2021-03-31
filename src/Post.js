import React from 'react';

function Post(props) {
   const like = () => {
      console.log('ti piace questo post');
   }
   return(
      <div className="Post">
         <h2>{props.author}</h2>
         <p>{props.body}</p>
         <button onClick={like}>Like</button>
      </div>
   )
}

export default Post;