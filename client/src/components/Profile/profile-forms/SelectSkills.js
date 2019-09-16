import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "aws", text: "AWS", value: "aws" },
  {
    key: "network architecture",
    text: "Network Architecture",
    value: "network architecture"
  },
  { key: "requizitez", text: "REQUIZITEZ", value: "requizitez" },
  { key: "ui config", text: "UI Config", value: "ui config" }
];

const SelectSkills = () => (
  <Dropdown placeholder="Skills" fluid multiple selection options={options} />
);

export default SelectSkills;
