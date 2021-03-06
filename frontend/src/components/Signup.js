import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
       formData.first_name,
       formData.last_name,
       formData.email,
       formData.password,
    );
  };

  const signup =
    (first_name, last_name, email, password) =>  {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({first_name, last_name, email, password});
      
      axios.post(
        "http://127.0.0.1:8000/auth/users/",
        body,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    };


  return (
    <div>
      <form onSubmit={handleSubmit} className="form-signup">
        {/*</form><img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">*/}
        <h1 className="h2 mb-3 font-weight-normal">Sign Up</h1>
        <label>First Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="first_name"
          name="first_name"
          className="form-control mb-3"
          placeholder="First Name"
          required
          autoFocus
        />
        <label>Last Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="last_name"
          name="last_name"
          className="form-control mb-3"
          placeholder="Last Name"
          required
          autoFocus
        />
        <label>Email Address</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email Address"
          required
          autoFocus
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          required
          autoFocus
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
