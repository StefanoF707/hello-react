import React from 'react';

class Post extends React.Component {
   state = {
      counter: 0,
    }
  
    increment = () => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

   render () {
      return(
         <div className="Post">
            <h2>{this.props.author}</h2>
            <p>{this.props.body}</p>
            <button onClick={this.increment}>Like</button>
            <span>{this.state.counter}</span>
         </div>
      )
   }
}

export default Post;