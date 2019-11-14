import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createMessage } from './messages';

// Get Leads
export const getLeads = () => async dispatch => {
  try {
    const res = await axios.get('/api/leads');

    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Delete Lead
export const deleteLead = id => async dispatch => {
  try {
    await axios.delete(`api/leads/${id}`);

    dispatch(createMessage({ deleteLead: 'Lead Deleted' }));

    dispatch({
      type: DELETE_LEAD,
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};

// Add Lead
export const addLead = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('api/leads/', formData, config);

    dispatch(createMessage({ addLead: 'Lead Added' }));

    dispatch({
      type: ADD_LEAD,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: { msg: err.response.data, status: err.response.status }
    });
  }
};
