import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Fragment>
      <Typography as="h1">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </Typography>

      <Typography as="p">Sorry, this page does not exist</Typography>
    </Fragment>
  );
};

export default NotFound;
