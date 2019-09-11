import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

let activeItem = "Employees";
const handleItemClick = e => {
  e.preventDefault();
};

const DirectoryTopMenu = () => {
  return (
    <Menu pointing>
      <Menu.Item
        name="Employees"
        active={activeItem === "Employees"}
        onClick={e => handleItemClick(e)}
      />
      <Menu.Item
        name="Teams"
        active={activeItem === "Teams"}
        onClick={e => handleItemClick(e)}
      />
      <Menu.Item
        name="OrgChart"
        active={activeItem === "OrgChart"}
        onClick={e => handleItemClick(e)}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default connect()(DirectoryTopMenu);
