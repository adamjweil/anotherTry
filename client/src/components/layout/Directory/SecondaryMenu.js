import React, { Fragment } from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
const SecondaryMenu = () => {
  return (
    <Fragment>
      <div className="ui secondary pointing menu">
        <Link to="/" className="active item">
          Employees
        </Link>
        <Link to="/" className="item">
          Teams
        </Link>
        <Link to="/" className="item">
          Org Chart
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input style={{ width: "350px" }} placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </div>

      <div className="ui info message">
        <i className="close icon"></i>
        <div className="header">
          Here is our Company Directory, organized by Employee, Team, and in the
          context of the overall organizational chart. Feel free to click on a
          specific Employee or Team to get additional details!
        </div>
      </div>
    </Fragment>
  );
};

export default SecondaryMenu;
