import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NoProfile = () => {
  return (
    <Fragment>
      <div className="ui warning message">
        <i className="close icon"></i>
        <div className="content">
          <div className="header">
            You have not yet set up a User Profile yet!
            <p style={{ fontSize: "12px", fontWeight: "100" }}>
              Please click on the button below, and add a couple additional
              pieces of information for your Profile to be created
            </p>
          </div>
        </div>
        <Link
          style={{
            marginLeft: "35%",
            marginRight: "35%",
            justifyContent: "center",
            verticalAlign: "center"
          }}
          to="/create-profile"
          className="ui blue animated button"
        >
          <div className="visible content">Create Profile</div>
          <div className="hidden content">
            <i aria-hidden="true" className="arrow right icon"></i>
          </div>
        </Link>
      </div>
      <Header as="h3" dividing />
    </Fragment>
  );
};

export default NoProfile;
