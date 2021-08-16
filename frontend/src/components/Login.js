import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/actions/actions';
import { connect } from 'react-redux';

function Login({ login, isAuthenticated }) {

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
        console.log(formData.email, formData.password)
        login(formData.email, formData.password)
    }

    if(isAuthenticated){
      return <Redirect to="/" />
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

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
