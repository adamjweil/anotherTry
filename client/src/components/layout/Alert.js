import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (

    <div className="ui negative message" key={alert.id}>
      <div className="header">
        {alert.msg}
      </div>
      <p>
      PlaceHolder
      </p>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(mapStateToProps)(Alert);
