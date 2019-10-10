import React from "react";
import { connect } from "react-redux";
import { Grid, Typography, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        display: "in-line",
        left: 0,
        bottom: 0,
        right: 0,
        // marginTop: "50px"
        marginBottom: "20px"
      }}
    >
      <Divider style={{ margin: "24px auto" }} />
      <Grid container>
        <Grid item xs={12}>
          <center>
            <Typography variant="caption" align={"center"}>
              © Copyright 2019
            </Typography>
          </center>
          <Divider style={{ margin: "13px auto", width: 70 }} />
        </Grid>
      </Grid>

      <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                renderas="button"
                size="small"
                color="default"
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px"
                }}
              >
                About Us
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <Link to="/directory" style={{ textDecoration: "none" }}>
              <Button
                renderas="button"
                size="small"
                color="default"
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px"
                }}
              >
                Company Directory
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                renderas="button"
                size="small"
                color="default"
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px"
                }}
              >
                Terms & Conditions
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                renderas="button"
                size="small"
                color="default"
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px"
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect()(Footer);
