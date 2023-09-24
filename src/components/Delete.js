import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Search() {
  const [value, setvalue] = useState("");
  const handleInput=(e)=>
  {
    setvalue(e.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8070/user/delete/${value}`)
      .then((res) => alert("successfully deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "#1F5667"}}>
      <div className="p-3 rounded" style={{backgroundColor: "#C5D3D8", minHeight: "200px", width: "50%"}}>
        <h1>
          <center>Delete User</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3" style={{marginTop: "40px"}}>
            <label htmlFor="employeeName">Enter Id:</label>
            <input
            style={{border: "1px solid black"}}
              type="text"
              placeholder="Enter id"
              className="form-control rounded-0"
              id="id"
              onChange={handleInput}
            ></input>
          </div>

          <button
            type="submit"
            className="btn border w-20 rounded-10 m-10" style={{backgroundColor: "#DD4700", color: "white"}}
          >
            Delete
          </button>
          <Link
            to="/"
            type="submit"
            className="btn border w-20 rounded-10 m-10" style={{backgroundColor: "#DD4700", color: "white", marginLeft: "7px"}}
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
