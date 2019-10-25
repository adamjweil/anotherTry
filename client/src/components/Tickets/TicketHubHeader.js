import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

const TicketHubHeader = () => {
  const formatDate = input => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(input).toLocaleDateString([], options);
  };
  const x = formatDate(Date.now());

  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            borderBottom: "1px solid black"
          }}
        >
          <Typography style={{ fontSize: "36px", fontWeight: "550" }}>
            TicketHub
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "300",
              marginTop: "-5px",
              marginLeft: "10px",
              color: "gray"
            }}
          >
            {x}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TicketHubHeader;
