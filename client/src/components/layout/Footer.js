import React from 'react';
import { Step } from 'semantic-ui-react';

const Footer = () => {
  return (
      <footer>
      <div>
        <Step.Group fluid>
          <Step
            active
            icon="ticket"
            title="Improved Ticket Mgmt"
            description="Enter, fix, comment and help out with tickets, all from one place"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
          <Step
            active
            icon="paper plane"
            title="Improved Communications"
            description="Clearer organizational channels that will reduce reducdency"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
          <Step
            active
            icon="angellist"
            title="Teamwork"
            description="Become more invested in the success of our company?"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
        </Step.Group>
      </div>
    </footer>
  )};

export default Footer;
