import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from '../../actions/alert';

const onSubmit = id => async dispatch => {
  removeAlert(id);
}
const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (

      (alert.alertType === 'danger') ? (
      <div className="ui negative danger message" key={alert.id} on>
        <i className="close icon" onClick={onSubmit(alert.id)}></i>
        <div className="header">
          {alert.msg}
        </div>
      </div>
    ) : "" )
);


Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(mapStateToProps, { removeAlert })(Alert);
