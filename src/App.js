import React from 'react';
// import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from './komponen/input';
import Card from "./komponen/card";
import "./styles/styles.css"

function App() {
  const [values, setValues] = React.useState({
    judul: "",
    catatan: "",
  });
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState("")
  // const handlePassword = (e) => {
  //   if (values.judul === "") {
  //     e.preventDefault();
  //     alert("There's Empty Form");
  //     setForm("Form is empty")
  //   }

  //   else (values.catatan === "") {
  //     e.preventDefault();
  //     alert("There's Empty Form");
  //     setForm("Form is empty")
  //   }
  // }
      
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
    setValues((values) => {
      return {
        judul: "",
        catatan: "",
      };
    });
    setData((data) => {
      return [...data, values];
    });
  }

  // function handleReset(e) {
  //   e.preventDefault();
  //   setValues((values) => {
  //     return {
  //       judul: "",
  //       catatan: "",
  //     };
  //   });
  // }

  const handleBlur = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };

  const handleChange = (e) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
    if (values.judul === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.catatan === "") {
      e.preventDefault();
      setForm("")
    }
  }
    

  console.log("error", error);

    return (
    <React.Fragment>
      <div className="center-flex">
        <div className="center1">
          <form onSubmit={handleSubmit} isError={error?.form}>
            <p className="error">{form}</p>
            <Input
              isError={error?.judul}
              name="judul"
              label={"Judul"}
              placeholder={"Judul"}
              value={values.judul}
              onChange={handleChange}
              onBlur={handleBlur}
              // onPassword={handlePassword}
            />
            <Input
              isError={error?.catatan}
              name="catatan"
              label={"Catatan"}
              placeholder={"Catatan"}
              value={values.catatan}
              onChange={handleChange}
              onBlur={handleBlur}
              // onPassword={handlePassword}
            />
            <Button
              title={"Submit"}
              color={"#151515"}
            />
            {/* <Button title={"Reset"} color={"#151515"} onClick={handleReset} /> */}
          </form>
        </div>
        <div className="pad scroll view">
          <Card
            data={data}
            setData={setData}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </React.Fragment>
  );
    }


export default App;