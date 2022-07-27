import React from 'react';
import Header from "./Component/header";
import Tes from "./Component/module/tes";
import {Input, Button} from "./Component/name"
function App () {
  return(
    <React.Fragment>
      <h1>Latihan Export Import</h1>
      <Header/>
      <Tes/>
      <Input/>
      <Button/>
    </React.Fragment>
  );
}

export default App