import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function Search() {
  const[id, setId] = useState("");
  const [value, setvalue] = useState({
    name: "",
    language:"",
    framework: "",
  });
  const{name, language, framework} = value;
  //handleinput method is use to handle event and store data what we are typing on insertion form.
  const handleInput = (event) => {
    setvalue(
      {...value,
      [event.target.name]: event.target.value},
    );
  };
  const handleInputId=(e)=>
  {
    setId(e.target.value);
  }
  //this method will trigger when we click insert buttoon.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    //axios use to connect frontend with backend and passing also value(it contains data of form) to backend.
    Axios.put(`http://localhost:8070/user/update/${id}`, value)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Error") {
          alert("Already Same data is present in the table");
        } else {
          alert("Data inserted successfully");
          setvalue(
            {
              name: "",
              language:"",
              framework: ""
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "#1F5667"}}>
      <div className="p-3 rounded w-35" style={{backgroundColor: "#C5D3D8",minHeight: "400px", width: "400px"}}>
        <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="employeeName">Enter ID:</label>
            <input
            style={{border: "1px solid black"}}
              type="text"
              placeholder="Enter id"
              className="form-control rounded-0"
              name="id"
              onChange={handleInputId}
            ></input>
          </div>
          <h1>Updated Details</h1>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Name:</label>
            <input
            style={{border: "1px solid black"}}
              type="text"
              placeholder="Enter Name"
              className="form-control rounded-0"
              name="name"
              value={name}
              onChange={handleInput}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Language:</label>
            <input
            style={{border: "1px solid black"}}
              type="text"
              placeholder="Enter name"
              className="form-control rounded-0"
              name="language"
              value={language}
              onChange={handleInput}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Framework:</label>
            <input
            style={{border: "1px solid black"}}
              type="text"
              placeholder="Enter name"
              className="form-control rounded-0"
              name="framework"
              value={framework}
              onChange={handleInput}
            ></input>
          </div>
          <button
            type="submit"
            className="btn border w-50 rounded-10 m-10" style={{backgroundColor: "#DD4700", color: "white"}}
          >
            Update
          </button>
          <Link
            to="/"
            type="submit"
            className="btn border w-50 rounded-10 m-10" style={{backgroundColor: "#DD4700", color: "white"}}
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
