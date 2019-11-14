import React, { useState } from 'react';
import { addLead } from '../../actions/leads';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Form = ({ addLead }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onSubmit = e => {
    e.preventDefault();
    addLead(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='card card-body mt-4 mb-4'>
      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            className='form-control'
            type='text'
            name='name'
            onChange={onChange}
            value={name}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            className='form-control'
            type='email'
            name='email'
            onChange={onChange}
            value={email}
          />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea
            className='form-control'
            type='text'
            name='message'
            onChange={onChange}
            value={message}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired
};

export default connect(null, { addLead })(Form);
