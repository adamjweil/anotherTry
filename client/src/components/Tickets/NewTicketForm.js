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
  Select,
  Box
} from "@material-ui/core";
// Redux
import { connect } from "react-redux";

const PROJECTS = [
  { key: 0, text: "OPP-IG", value: "OPP-IG" },
  { key: 1, text: "Security Master", value: "SECURITY MASTER" },
  { key: 2, text: "INSURANCE", value: "INSURANCE" },
  { key: 3, text: "ANNIVERSARY", value: "ANNIVERSARY" },
  { key: 4, text: "ANNUITIZATION", value: "ANNUITIZATION" },
  { key: 5, text: "API SETUP", value: "API SETUP" },
  { key: 6, text: "CONTRACT", value: "CONTRACT" },
  { key: 7, text: "CORRECTIVE PROCESSING", value: "CORRECTIVE PROCESSING" },
  { key: 8, text: "CORRESPONDENCE", value: "CORRESPONDENCE" },
  { key: 9, text: "DIVORCE", value: "DIVORCE" },
  { key: 10, text: "FOREIGN RESIDENT", value: "FOREIGN RESIDENT" },
  { key: 11, text: "GLWB", value: "GLWB" },
  { key: 12, text: "IM PERFORMANCE", value: "IM PERFORMANCE" },
  { key: 13, text: "INTEGRATION", value: "INTEGRATION" },
  { key: 14, text: "INTEGRATIONS", value: "INTEGRATIONS" },
  { key: 15, text: "LE GO-LIVE", value: "LE GO-LIVE" },
  { key: 16, text: "LOGIQ UPGRADE", value: "LOGIQ UPGRADE" },
  { key: 17, text: "MESSAGES", value: "MESSAGES" },
  { key: 18, text: "NAVIGATION UPGRADE", value: "NAVIGATION UPGRADE" },
  { key: 19, text: "NFC", value: "NFC" },
  { key: 20, text: "PERFORMANCE", value: "PERFORMANCE" },
  {
    key: 21,
    text: "PORTFOLIO ACCOUNTING GL",
    value: "PORTFOLIO ACCOUNTING GL"
  },
  { key: 22, text: "PROD PARALLEL PREP", value: "PROD PARALLEL PREP" },
  { key: 23, text: "PURCHASES", value: "PURCHASES" },
  { key: 24, text: "QUAL PLAN CHANGES", value: "QUAL PLAN CHANGES" },
  { key: 25, text: "RMD", value: "RMD" },
  { key: 26, text: "SUPPORT", value: "SUPPORT" },
  { key: 27, text: "TAXES", value: "TAXES" },
  { key: 28, text: "TRANSFERS", value: "TRANSFERS" },
  { key: 29, text: "TREASURY-CASH", value: "TREASURY-CASH" },
  {
    key: 30,
    text: "TREASURY-RECONCILIATION",
    value: "TREASURY-RECONCILIATION"
  },
  { key: 31, text: "UI", value: "UI" },
  { key: 32, text: "UI-BASICS", value: "UI-BASICS" },
  { key: 33, text: "UI-PERFORMANCE", value: "UI-PERFORMANCE" },
  { key: 34, text: "VERTEX ELIMINATION", value: "VERTEX ELIMINATION" },
  { key: 35, text: "WITHDRAWALS", value: "WITHDRAWALS" }
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
  { key: 0, text: "SUBMITTED", value: "SUBMITTED" },
  { key: 1, text: "INITIATED", value: "INITIATED" },
  { key: 2, text: "MERGED", value: "MERGED" },
  { key: 3, text: "WITHDRAWN", value: "WITHDRAWN" },
  { key: 4, text: "CLOSED", value: "CLOSED" }
];

const STANDINGVALUES = [
  { key: 0, text: "GO", value: "GO" },
  { key: 1, text: "TALK", value: "TALK" },
  { key: 2, text: "TBD", value: "TBD" },
  { key: 3, text: "TBD-X", value: "TBD-X" }
];

const SOURCES = [
  { key: 0, text: "MZQ", value: "MXQ" },
  { key: 1, text: "ELD", value: "ELD" },
  { key: 2, text: "GUGG", value: "GUGG" }
];

const BUCKETS = [
  { key: 0, text: "ELDRIDGE", value: "ELDRIDGE" },
  { key: 1, text: "GUGGENHEIM", value: "GUGGENHEIM" },
  { key: 2, text: "DATA HANDLING", value: "DATA HANDLING" },
  { key: 3, text: "USER EXPERIENCE", value: "USER EXPERIENCE" },
  { key: 4, text: "MEZOCLIQ", value: "MEZOCLIQ" }
];

const NewTicketForm = props => {
  return (
    <Fragment>
      <Box style={{ border: "1px solid grey", padding: "15px" }}>
        <Grid item xs={12}>
          <center>
            <h2>NEW TICKET FORM</h2>
            <p>Submit a New Ticket Below!</p>
          </center>
        </Grid>

        <form>
          <Grid container spacing={2}>
            <Grid item>
              <FormControl style={{ width: "150px" }}>
                <InputLabel>Type</InputLabel>
                <Select name="type">
                  {TICKETTYPES.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ width: "100px" }}>
                <InputLabel>Source</InputLabel>
                <Select name="source">
                  {SOURCES.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ width: "90px" }} size="small">
                <InputLabel>ENV</InputLabel>
                <Select name="environment">
                  {ENVIRONMENTS.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ width: "100px" }}>
                <InputLabel>Bucket:</InputLabel>
                <Select name="bucket">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {BUCKETS.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ width: "200px" }}>
                <InputLabel>Project</InputLabel>
                <Select name="project">
                  {PROJECTS.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ width: "100px", margin: "0 5px 5px 0" }}>
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
            <Grid item>
              <FormControl style={{ width: "150px" }}>
                <InputLabel>Process</InputLabel>
                <Select name="process">
                  {PROCESSES.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "175px" }}>
                <InputLabel>Owner:</InputLabel>
                <Select name="owner">
                  {PEOPLE.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "175px" }}>
                <InputLabel>Fixer:</InputLabel>
                <Select name="fixer">
                  {PEOPLE.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "100px" }}>
                <InputLabel>Status:</InputLabel>
                <Select name="status">
                  {STATUSVALUES.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "175px" }}>
                <InputLabel>Tester:</InputLabel>
                <Select name="tester">
                  {PEOPLE.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "100px" }}>
                <InputLabel>STD:</InputLabel>
                <Select name="standing">
                  {STANDINGVALUES.map(type => (
                    <MenuItem value={type.text} key={type.id}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl component="fieldset" style={{ marginTop: "15px" }}>
                <FormLabel commponent="legend">Importance:</FormLabel>
                <RadioGroup aria-label="importance" name="importance" row>
                  <FormControlLabel
                    value="High"
                    control={<Radio />}
                    label="High"
                  />
                  <FormControlLabel
                    value="Neutral"
                    control={<Radio />}
                    label="Neutral"
                  />
                  <FormControlLabel
                    value="Low"
                    control={<Radio />}
                    label="Low"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Fragment>
  );
};

NewTicketForm.propTypes = {};

export default connect()(NewTicketForm);
