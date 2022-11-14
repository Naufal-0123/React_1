import React from "react";
import ReducerTutorial from "./komponen/useReducer";
import RefTutorial from "./komponen/useRef";
import Parent from "./optimize";

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">Belajar React</h1>
      <Parent/>
      {/* <ReducerTutorial /> */}
    </React.Fragment>
  );
}

export default App;
