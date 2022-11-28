import React, {memo, useCallback, useMemo} from "react";

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState("blue");
  console.log("parent render");

  // const handleCount = () => {
  //   setCount((c) => c + 1)
  // };

  const prosesBerat = (count) => {
    if(count < 2000000000){
    }
    console.log("proses berjalan")
    return count + 1;                                    
  }

  const prosesBeratMemo = useMemo(() => {
    return prosesBerat(count)
  }, [count])
  // const handleCountOP = useCallback(handleCount, [])

  const handleCount = useCallback(() => {
    setCount((count) => count + 1)
  },[])

  return (
    <div>
      <h1>Parent</h1>
      <p>Count : {count}</p>
      <p>Count2 : {prosesBeratMemo}</p>
      <button
      className="bg-blue-500 text-white border px-3 py-2 "
        onClick={() => {
          setCount(handleCount);
        }}
      >
        Tambah
      </button>
      <div className="space-x-10">
      <button onClick={() => {
        setUser("red")
      }}>
        Red
      </button> 
      <button onClick={() => {
        setUser("green")
      }}>
        Green
      </button>
      <button onClick={() => {
        setUser("blue")
      }}>
        Blue
      </button>
      </div>
      <MemorizeChild user={user} handleCount1={handleCount}/>
    </div>
  );
}

const MemorizeChild = memo(Child)

function Child({ user, handleCount }) {
  console.log("child render", Date.now());
  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
      <button className="bg-blue-500 text-white border px-3 py-2 " onClick={handleCount}>Tambah Count </button>
    </div>
  );
}

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
}
