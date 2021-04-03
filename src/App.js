import React from 'react';
import Post from './Post';
import  './App.css';


// JSX

function App ()  {
    return (
      <div >
        <h1>Hello React</h1>
        <div className="PostsContainer">
          <Post author='Stefano' body='Lorem ipsum dolor sit amet consectetur' />
          <Post author='Anna' body='adipisicing elit. Excepturi incidunt exercitationem ab maxime, repellendus' />
          <Post author='Umberto' body='cum, eaque nobis autem quidem neque vitae' />
          <Post author='Calogero' body='veritatis iste totam. Quas facilis numquam rem laboriosam beatae!' /> 
        </div>
      </div>
    )
}

export default App;

