import React from 'react';
import { Whatsapp1, Whatsapp2 } from './komponen';
import './App.css';


function App () {
  return(
    <React.Fragment>
     <section className='flex w-screen h-screen'>
        <Whatsapp1/>
        <Whatsapp2/>
     </section>
    </React.Fragment>
  );
}

export default App