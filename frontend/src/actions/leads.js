import { GET_LEADS } from "./types";
import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";

// Get Leads
export const getLeads = () => async dispatch => {
  try {
    const res = await axios.get("/api/leads");

    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  } catch (err) {
    console.error(err.response.statusText);
  }
};
