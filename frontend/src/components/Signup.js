import React, { useState, useEffect } from "react";

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
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-signup">
        {/*</form><img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">*/}
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <label for="inputFirstName" className="sr-only">
          First Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="first_name"
          name="first_name"
          className="form-control"
          placeholder="First Name"
          required
          autofocus
        />
        <label for="inputLastName" className="sr-only">
          First Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="last_name"
          name="last_name"
          className="form-control"
          placeholder="Last Name"
          required
          autofocus
        />
        <label for="password" className="sr-only">
          Last Name
        </label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          required
          autofocus
        />
        <label for="password" className="sr-only">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Signup;
