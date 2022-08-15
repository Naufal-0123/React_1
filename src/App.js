import React from 'react';
import Card from './card';

function App () {
  let [Count, setCount] = React.useState(0)
  let [message, setMessage] = React.useState(0);

  return(
    <div>
      <h3>{message === 10 ? "ini baru sepuluh" : "ini bukan sepuluh"}</h3>
      <Card Count={Count} setCount={setCount}/>
    </div>
  );
}

export default App;