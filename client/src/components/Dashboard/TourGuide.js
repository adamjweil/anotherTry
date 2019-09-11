import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TourGuide = () => {
  return (
    <Fragment>
      <div className="ui info message">
        <i className="close icon"></i>
        <div className="content">
          <Header as="h2">Take a Tour?</Header>
          <p>Please click on the button below to start your tour...</p>
        </div>
        <Link
          style={{
            marginLeft: "",
            marginRight: "75%",
            justifyContent: "center",
            verticalAlign: "center"
          }}
          to="/"
          className="ui button green"
        >
          Start Tour
        </Link>
      </div>
    </Fragment>
  );
};
export default TourGuide;
