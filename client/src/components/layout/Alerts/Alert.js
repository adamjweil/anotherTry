import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../../../actions/alert";

const onSubmit = id => async dispatch => {
  removeAlert(id);
};

const Alert = ({ alerts, removeAlert }) => {
  return (
    alerts.length > 0 &&
    alerts.map(alert =>
      alert.alertType === "danger" ? (
        <div className="ui negative danger message" key={alert.id}>
          <i className="close icon" onClick={onSubmit(alert.id)}></i>
          <div className="header">{alert.msg}</div>
        </div>
      ) : (
        <div className="ui positive success message" key={alert.id}>
          <i className="close icon" onClick={onSubmit(alert.id)}></i>
          <div className="header">{alert.msg}</div>
        </div>
      )
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
