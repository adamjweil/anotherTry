import React from "react";
import { Header } from "semantic-ui-react";

const DashboardDetails = () => {
  return (
    <div className="ui info message">
      <i className="close icon"></i>
      <div className="content">
        <Header as="h2">Dashboard</Header>
        <ul className="list">
          <li className="content">
            This page will be where you are spending most of your time
          </li>
          <li className="content">
            Any outstanding tickets or requests that your name is associated
            with, can be viewed here
          </li>
          <li className="content">
            Notifications regarding any new or updated Tickets or Requests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardDetails;
