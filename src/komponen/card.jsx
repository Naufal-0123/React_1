import React from "react";

function Card({ data, setData, values, setValues, update, error, ...props}) {
  //   console.log(data);
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("ok");
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter)
    setData(()=>{
      return filter
    })
  };
  return (
    <React.Fragment>
      {data?.map((item) => {
        return (
          <React.Fragment>
            <div className="pad white">
              <p>Judul: {item.judul}</p>
              <p>Catatan: {item.catatan}</p>
              {error && <p className="error">Tes</p>}
              <button value={item.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Card;