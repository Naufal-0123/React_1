import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      showText: state.showText,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
      showText: state.showText,
    };
  }
  if (action.type === "toggleShowText") {
    return {
      count: state.count,
      showText: !state.showText,
    };
  }
  return state;
};


export default function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <div className="flex space-x-5">
      <button
      className="bg-red-500"
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        //   dispatch({
        //     type: "DECREMENT",
        //   });
          dispatch({
            type: "toggleShowText",
          });
        }}
      >
        Tambah
      </button>
      <button
      className="bg-blue-500"
        onClick={() => {
        //   dispatch({
        //     type: "INCREMENT",
        //   });
          dispatch({
            type: "DECREMENT",
          });
          dispatch({
            type: "toggleShowText",
          });
        }}
      >
        Kurang
      </button>
      </div>
      {state.showText && <p>Text Ini Muncul</p>}
    </div>
  );
}

