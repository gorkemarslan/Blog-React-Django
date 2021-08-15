import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div>
        <form onSubmit={handleSubmit} className="form-signup">
          {/*</form><img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">*/}
          <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
          <label className="sr-only">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
            autoFocus
          />
          <label className="sr-only">
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
            autoFocus
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    )
}

export default Login
