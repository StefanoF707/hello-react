import React from 'react';

function Print() {
   const print = () => {
      console.log('funzione stampata in console');
    }
    return (
      <button onClick={print}>Clicca qui</button>
    )
}

export default Print;