import React from "react";

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState("Dzakwan");
  console.log("parent render");

  return (
    <div>
      <h1>Parent</h1>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Tambah
      </button>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  console.log("child render");

  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
    </div>
  );
}

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
