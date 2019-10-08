import React, { Fragment } from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
// Redux
import { connect } from "react-redux";

const PROJECTS = [
  { key: 0, text: "OPP-IG", value: "OPP-IG" },
  { key: 1, text: "Security Master", value: "SECURITY MASTER" },
  { key: 2, text: "INSURANCE", value: "INSURANCE" }
];

const PEOPLE = [
  { key: 0, text: "Adam Weil", value: "Adam Weil" },
  { key: 1, text: "Lindsay Weil", value: "Lindsay Weil" },
  { key: 2, text: "Matt Weil", value: "Matt Weil" }
];

const RELEASES = [
  { key: 0, text: "19A-12", value: "19A-12" },
  { key: 1, text: "20B-1", value: "20B-1" },
  { key: 2, text: "20C-2", value: "20C-2" }
];

const TICKETTYPES = [
  { key: 0, text: "BUGFIX", value: "BUGFIX" },
  { key: 1, text: "ENHANCEMENT", value: "ENHANCEMENT" }
];

const ENVIRONMENTS = [
  { key: 0, text: "QABIN", value: "QABIN" },
  { key: 1, text: "QANON", value: "QANON" },
  { key: 2, text: "QAMP", value: "QAMP" },
  { key: 2, text: "BiVuk", value: "BiVuk" }
];

const PROCESSES = [
  { key: 0, text: "SECURITIES", value: "SECURITIES" },
  { key: 1, text: "PRODUCTS", value: "PRODUCTS" },
  { key: 2, text: "ACCOUNTS", value: "ACCOUNTS" },
  { key: 3, text: "FULLFILLMENT", value: "FULLFILLMENT" },
  { key: 4, text: "ACCOUNT AFFILIATES", value: "ACCOUNT AFFILIATES" },
  { key: 5, text: "PRODUCT AFFILIATES", value: "PRODUCT AFFILIATES" },
  { key: 6, text: "RESTRICTIONS", value: "RESTRICTIONS" },
  { key: 7, text: "PRICING", value: "PRICING" },
  { key: 8, text: "TERMS", value: "TERMS" }
];

const STATUSVALUES = [
  { key: 0, text: "GO", value: "GO" },
  { key: 1, text: "TALK", value: "TALK" },
  { key: 2, text: "TBD", value: "TBD" },
  { key: 3, text: "TBD-X", value: "TBD-X" }
];

const NewTicketForm = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <center>
          <h2>NEW TICKET FORM</h2>
          <p>Submit a New Ticket Below!</p>
        </center>
      </Grid>
      <Grid container spacing={1}>
        <Grid item sm={1}></Grid>
        <Grid item xs={6} sm={2}>
          <FormControl component="fieldset">
            <FormLabel commponent="legend">Importance:</FormLabel>
            <RadioGroup aria-label="importance" name="importance" row>
              <FormControlLabel value="High" control={<Radio />} label="High" />
              <FormControlLabel
                value="Neutral"
                control={<Radio />}
                label="Neutral"
              />
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={3}>
          <FormControl style={{ width: "65px", marginRight: "15px" }}>
            <InputLabel>Type</InputLabel>
            <Select name="type">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {TICKETTYPES.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "185px" }}>
            <InputLabel>Project</InputLabel>
            <Select name="project">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PROJECTS.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={2}>
          <FormControl style={{ width: "90px" }}>
            <InputLabel>ENV</InputLabel>
            <Select name="environment">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {ENVIRONMENTS.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "100px" }}>
            <InputLabel>Status:</InputLabel>
            <Select name="status">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {STATUSVALUES.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl style={{ width: "130px" }}>
            <InputLabel>Fixer:</InputLabel>
            <Select name="fixer">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PEOPLE.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Process</InputLabel>
            <Select name="process">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PROCESSES.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={2}>
          <FormControl style={{ width: "100px" }}>
            <InputLabel>Release:</InputLabel>
            <Select name="release">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {RELEASES.map(type => (
                <MenuItem value={type.text} key={type.id}>
                  {type.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={2}>
          <TextField />
        </Grid>
      </Grid>

      <Grid item sm={1}></Grid>
    </Fragment>
  );
};

NewTicketForm.propTypes = {};

export default connect()(NewTicketForm);
