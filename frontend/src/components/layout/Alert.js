import React, { Fragment, useEffect, useRef } from 'react';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ error, message }) => {
  const alert = useAlert();

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.username)
        alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.password)
        alert.error(`Password: ${error.msg.password.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.username) alert.error(error.msg.username.join());

      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addLead) alert.success(message.addLead);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }
  }, [error, message]);

  return <Fragment></Fragment>;
};

Alert.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(Alert);
