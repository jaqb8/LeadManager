import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

const Register = ({ createMessage, register, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const { username, email, password, password2 } = formData;

  const onSubmit = e => {
    e.preventDefault();
    password !== password2
      ? createMessage({ passwordsNotMatch: 'Passwords do not match' })
      : register({ username, email, password });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='col-md-6 m-auto'>
      <div className='card card-body mt-5'>
        <h2 className='text-center'>Register</h2>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              className='form-control'
              name='username'
              onChange={onChange}
              value={username}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={onChange}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              onChange={onChange}
              value={password}
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              name='password2'
              onChange={onChange}
              value={password2}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  createMessage: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { register, createMessage })(Register);
