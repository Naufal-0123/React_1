import React from 'react';
import Card from './card';
import Warna from './Warna';

function App () {
  let [Count, setCount] = React.useState(0)
  let [warna, setWarna] = React.useState("Blue")
  return(
    <div>
      <Warna warna={warna} setWarna={setWarna}/>
      <Card Count={Count} setCount={setCount}/>
    </div>
  );
}

export default App;