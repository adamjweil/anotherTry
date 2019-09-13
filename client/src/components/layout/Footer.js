import React from "react";
import { Step } from "semantic-ui-react";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
const FooterContainer = styled(Container)({
  textAlign: "center",
  position: "absolute",
  bottom: "0",
  width: "100% !important",
  height: "100px !important",
  background: "#6cf"
});

const Footer = () => {
  return (
    <FooterContainer>
      <Step.Group stackable="tablet">
        <Grid container>
          <Grid item xs={4}>
            <Step
              active
              icon="ticket"
              title="Improved Ticket Mgmt"
              description="Enter, fix, comment and help out with tickets, all from one place"
              style={{}}
            />
          </Grid>
          <Grid item xs={4}>
            <Step
              active
              icon="paper plane"
              title="Improved Communications"
              description="Clearer organizational channels that will reduce reducdency"
              style={{}}
            />
          </Grid>
          <Grid item xs={4}>
            <Step
              active
              icon="angellist"
              title="Teamwork"
              description="Become more invested in the success of our company?"
              style={{}}
            />
          </Grid>
        </Grid>
      </Step.Group>
    </FooterContainer>
  );
};

export default Footer;
