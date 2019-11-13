import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

const Leads = ({ getLeads }) => {
  useEffect(() => {
    getLeads();
  }, [getLeads]);

  return (
    <div>
      <h1>Leads List</h1>
    </div>
  );
};

Leads.propTypes = {
  getLeads: PropTypes.func.isRequired
};

export default connect(null, { getLeads })(Leads);
