import React, { useState } from 'react';
import axios from 'axios';
import store from '../store';

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
        login(formData.email, formData.password)
    }

    const login = (email, password) => {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      const body = JSON.stringify({email, password});
      
      axios.post('http://127.0.0.1:8000/auth/jwt/create/', body, config)
      .then((response) => {
        store.dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        store.dispatch({
          type: 'LOGIN_FAIL'
        })
      })
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="form-signup">
          {/*</form><img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">*/}
          <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
          <label>
            Email
          </label>
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
          <label>
            Password
          </label>
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
            Log In
          </button>
        </form>
      </div>
    )
}

export default Login
