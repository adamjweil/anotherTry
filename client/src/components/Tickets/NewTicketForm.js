import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Divider,
  Paper
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { fetchUsers, loadUser } from "../../actions/user";
import { fetchProfiles } from "../../actions/profile";
import { createTicket } from "../../actions/ticket";
// import { showErrorSnackbar } from "../../actions/alert";
const PROJECTS = [
  {
    key: 0,
    text: "OPP-IG",
    value: "OPP-IG"
  },
  {
    key: 1,
    text: "Security Master",
    value: "SECURITY MASTER"
  },
  {
    key: 2,
    text: "INSURANCE",
    value: "INSURANCE"
  },
  {
    key: 3,
    text: "ANNIVERSARY",
    value: "ANNIVERSARY"
  },
  {
    key: 4,
    text: "ANNUITIZATION",
    value: "ANNUITIZATION"
  },
  {
    key: 5,
    text: "API SETUP",
    value: "API SETUP"
  },
  {
    key: 6,
    text: "CONTRACT",
    value: "CONTRACT"
  },
  {
    key: 7,
    text: "CORRECTIVE PROCESSING",
    value: "CORRECTIVE PROCESSING"
  },
  {
    key: 8,
    text: "CORRESPONDENCE",
    value: "CORRESPONDENCE"
  },
  {
    key: 9,
    text: "DIVORCE",
    value: "DIVORCE"
  },
  {
    key: 10,
    text: "FOREIGN RESIDENT",
    value: "FOREIGN RESIDENT"
  },
  {
    key: 11,
    text: "GLWB",
    value: "GLWB"
  },
  {
    key: 12,
    text: "IM PERFORMANCE",
    value: "IM PERFORMANCE"
  },
  {
    key: 13,
    text: "INTEGRATION",
    value: "INTEGRATION"
  },
  {
    key: 14,
    text: "INTEGRATIONS",
    value: "INTEGRATIONS"
  },
  {
    key: 15,
    text: "LE GO-LIVE",
    value: "LE GO-LIVE"
  },
  {
    key: 16,
    text: "LOGIQ UPGRADE",
    value: "LOGIQ UPGRADE"
  },
  {
    key: 17,
    text: "MESSAGES",
    value: "MESSAGES"
  },
  {
    key: 18,
    text: "NAVIGATION UPGRADE",
    value: "NAVIGATION UPGRADE"
  },
  {
    key: 19,
    text: "NFC",
    value: "NFC"
  },
  {
    key: 20,
    text: "PERFORMANCE",
    value: "PERFORMANCE"
  },
  {
    key: 21,
    text: "PORTFOLIO ACCOUNTING GL",
    value: "PORTFOLIO ACCOUNTING GL"
  },
  {
    key: 22,
    text: "PROD PARALLEL PREP",
    value: "PROD PARALLEL PREP"
  },
  {
    key: 23,
    text: "PURCHASES",
    value: "PURCHASES"
  },
  {
    key: 24,
    text: "QUAL PLAN CHANGES",
    value: "QUAL PLAN CHANGES"
  },
  {
    key: 25,
    text: "RMD",
    value: "RMD"
  },
  {
    key: 26,
    text: "SUPPORT",
    value: "SUPPORT"
  },
  {
    key: 27,
    text: "TAXES",
    value: "TAXES"
  },
  {
    key: 28,
    text: "TRANSFERS",
    value: "TRANSFERS"
  },
  {
    key: 29,
    text: "TREASURY-CASH",
    value: "TREASURY-CASH"
  },
  {
    key: 30,
    text: "TREASURY-RECONCILIATION",
    value: "TREASURY-RECONCILIATION"
  },
  {
    key: 31,
    text: "UI",
    value: "UI"
  },
  {
    key: 32,
    text: "UI-BASICS",
    value: "UI-BASICS"
  },
  {
    key: 33,
    text: "UI-PERFORMANCE",
    value: "UI-PERFORMANCE"
  },
  {
    key: 34,
    text: "VERTEX ELIMINATION",
    value: "VERTEX ELIMINATION"
  },
  {
    key: 35,
    text: "WITHDRAWALS",
    value: "WITHDRAWALS"
  }
];

const RELEASES = [
  {
    key: 0,
    text: "19A-12",
    value: "19A-12"
  },
  {
    key: 1,
    text: "20B-1",
    value: "20B-1"
  },
  {
    key: 2,
    text: "20C-2",
    value: "20C-2"
  }
];

const TICKETTYPES = [
  {
    key: 0,
    text: "BUGFIX",
    value: "BUGFIX"
  },
  {
    key: 1,
    text: "ENHANCEMENT",
    value: "ENHANCEMENT"
  }
];

const ENVIRONMENTS = [
  {
    key: 0,
    text: "QABIN",
    value: "QABIN"
  },
  {
    key: 1,
    text: "QANON",
    value: "QANON"
  },
  {
    key: 2,
    text: "QAMP",
    value: "QAMP"
  },
  {
    key: 2,
    text: "BiVuk",
    value: "BiVuk"
  }
];

const PROCESSES = [
  {
    key: 0,
    text: "SECURITIES",
    value: "SECURITIES"
  },
  {
    key: 1,
    text: "PRODUCTS",
    value: "PRODUCTS"
  },
  {
    key: 2,
    text: "ACCOUNTS",
    value: "ACCOUNTS"
  },
  {
    key: 3,
    text: "FULLFILLMENT",
    value: "FULLFILLMENT"
  },
  {
    key: 4,
    text: "ACCOUNT AFFILIATES",
    value: "ACCOUNT AFFILIATES"
  },
  {
    key: 5,
    text: "PRODUCT AFFILIATES",
    value: "PRODUCT AFFILIATES"
  },
  {
    key: 6,
    text: "RESTRICTIONS",
    value: "RESTRICTIONS"
  },
  {
    key: 7,
    text: "PRICING",
    value: "PRICING"
  },
  {
    key: 8,
    text: "TERMS",
    value: "TERMS"
  }
];

const STATUSVALUES = [
  {
    key: 0,
    text: "SUBMITTED",
    value: "SUBMITTED"
  },
  {
    key: 1,
    text: "INITIATED",
    value: "INITIATED"
  },
  {
    key: 2,
    text: "MERGED",
    value: "MERGED"
  },
  {
    key: 3,
    text: "WITHDRAWN",
    value: "WITHDRAWN"
  },
  {
    key: 4,
    text: "CLOSED",
    value: "CLOSED"
  }
];

const STANDINGVALUES = [
  {
    key: 0,
    text: "GO",
    value: "GO"
  },
  {
    key: 1,
    text: "TALK",
    value: "TALK"
  },
  {
    key: 2,
    text: "TBD",
    value: "TBD"
  },
  {
    key: 3,
    text: "TBD-X",
    value: "TBD-X"
  }
];

const SOURCES = [
  {
    key: 0,
    text: "MZQ",
    value: "MXQ"
  },
  {
    key: 1,
    text: "ELD",
    value: "ELD"
  },
  {
    key: 2,
    text: "GUGG",
    value: "GUGG"
  }
];

const BUCKETS = [
  {
    key: 0,
    text: "ELDRIDGE",
    value: "ELDRIDGE"
  },
  {
    key: 1,
    text: "GUGGENHEIM",
    value: "GUGGENHEIM"
  },
  {
    key: 2,
    text: "DATA HANDLING",
    value: "DATA HANDLING"
  },
  {
    key: 3,
    text: "USER EXPERIENCE",
    value: "USER EXPERIENCE"
  },
  {
    key: 4,
    text: "MEZOCLIQ",
    value: "MEZOCLIQ"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5)
    // backgroundColor: "#424242"
  },
  paper: {
    margin: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px",
    backgroundColor: "#F8F8F8",
    boxShadow: "0px 4px 6px 0 hsla(0, 0%,0%, 0.6)"
  },
  form: {
    borderRadius: "3px",
    margin: theme.spacing(1, 0, 3),
    padding: theme.spacing(2, 5, 5)
  },
  message: {
    fontSize: "36px",
    fontWeight: "600",
    color: "gray"
  },
  subMessage: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#A9A9A9",
    textAlign: "center"
  }
}));

const NewTicketForm = ({
  loadUser,
  users,
  user,
  fetchUsers,
  fetchProfiles,
  createTicket,
  profiles,
  loadCurrentProfile,
  history
}) => {
  useEffect(() => {
    fetchUsers();
    fetchProfiles();
  }, [fetchUsers, fetchProfiles]);

  const [formData, setFormData] = useState({
    source: "",
    ticketer: "",
    ticketType: "",
    environment: "",
    bucket: "",
    project: "",
    release: "",
    process: "",
    owner: "",
    fixer: "",
    tester: "",
    status: "",
    standing: "",
    ticketId: "",
    importance: "",
    summary: ""
  });

  const {
    source,
    ticketer,
    ticketType,
    environment,
    bucket,
    summary,
    project,
    release,
    process,
    owner,
    fixer,
    tester,
    status,
    standing,
    ticketId,
    importance,
    description
  } = formData;

  const classes = useStyles();

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const onSubmit = e => {
    e.preventDefault();
    createTicket({ formData });
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography className={classes.message}>NEW TICKET FORM</Typography>
          <Typography className={classes.subMessage}>
            Submit a New Ticket Below!
          </Typography>
        </Grid>
        <Divider style={{ color: "black", margin: "auto", width: "425px" }} />

        <form onSubmit={onSubmit} className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth style={{ maxWidth: "1200px" }}>
                <TextField
                  fullWidth
                  name="summary"
                  value={summary}
                  onChange={e => onChange(e)}
                  placeholder="Ticket Summary"
                  className={classes.ticketSummary}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "100px"
                }}
              >
                <InputLabel> Source </InputLabel>
                <Select
                  name="source"
                  onChange={e => onChange(e)}
                  value={source}
                  variant="standard"
                >
                  <MenuItem value="">Source</MenuItem>
                  {SOURCES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "175px"
                }}
              >
                <InputLabel> Ticketer: </InputLabel>
                <Select
                  variant="standard"
                  name="ticketer"
                  onChange={e => onChange(e)}
                  value={ticketer}
                >
                  {" "}
                  {profiles.map(profile => (
                    <MenuItem value={profile._id} key={profile._id}>
                      {profile.firstName}
                      {""}
                      {profile.lastName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                style={{
                  width: "150px"
                }}
              >
                <InputLabel> Type </InputLabel>
                <Select
                  name="ticketType"
                  onChange={e => onChange(e)}
                  value={ticketType}
                  variant="standard"
                >
                  <MenuItem value="">Type</MenuItem>
                  {TICKETTYPES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                style={{
                  width: "90px"
                }}
                size="small"
              >
                <InputLabel> ENV </InputLabel>
                <Select
                  name="environment"
                  onChange={e => onChange(e)}
                  value={environment}
                  variant="standard"
                >
                  {ENVIRONMENTS.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl style={{ width: "200px" }}>
                <InputLabel> Project </InputLabel>
                <Select
                  name="project"
                  onChange={e => onChange(e)}
                  value={project}
                  variant="standard"
                >
                  {PROJECTS.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "100px",
                  margin: "0 5px 5px 0"
                }}
              >
                <InputLabel> Release: </InputLabel>
                <Select
                  name="release"
                  onChange={e => onChange(e)}
                  value={release}
                  variant="standard"
                >
                  {RELEASES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "150px"
                }}
              >
                <InputLabel> Process </InputLabel>
                <Select
                  name="process"
                  onChange={e => onChange(e)}
                  value={process}
                  variant="standard"
                >
                  {PROCESSES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "150px"
                }}
              >
                <InputLabel> Bucket </InputLabel>
                <Select
                  name="bucket"
                  onChange={e => onChange(e)}
                  value={bucket}
                  variant="standard"
                >
                  {BUCKETS.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                style={{
                  width: "100px"
                }}
              >
                <InputLabel> Status: </InputLabel>
                <Select
                  name="status"
                  onChange={e => onChange(e)}
                  value={status}
                  variant="standard"
                >
                  {STATUSVALUES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                style={{
                  width: "100px"
                }}
              >
                <InputLabel> STD: </InputLabel>
                <Select
                  name="standing"
                  onChange={e => onChange(e)}
                  value={standing}
                  variant="standard"
                >
                  {STANDINGVALUES.map(type => (
                    <MenuItem value={type.text} key={type.key}>
                      {type.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                style={{
                  width: "150px"
                }}
              >
                <InputLabel>Ticket ID:</InputLabel>
                <TextField
                  name="ticketId"
                  value={ticketId}
                  onChange={e => onChange(e)}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                component="fieldset"
                style={{
                  marginTop: "15px"
                }}
              >
                <FormLabel commponent="legend"> Importance: </FormLabel>
                <RadioGroup
                  // variant="standard"
                  aria-label="importance"
                  name="importance"
                  value={importance}
                  onChange={e => onChange(e)}
                  row
                >
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

              <FormControl
                style={{
                  width: "250px"
                }}
              >
                <InputLabel>Owner:</InputLabel>
                <Select
                  variant="standard"
                  name="owner"
                  onChange={e => onChange(e)}
                  value={owner}
                >
                  {profiles.map(profile => (
                    <MenuItem value={profile} key={profile}>
                      {profile.firstName} {profile.lastName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                style={{
                  width: "250px",
                  marginLeft: "20px"
                }}
              >
                <InputLabel>Fixer:</InputLabel>
                <Select
                  variant="standard"
                  name="fixer"
                  onChange={e => onChange(e)}
                  value={fixer}
                >
                  {profiles.map(profile => (
                    <MenuItem value={profile} key={profile}>
                      {profile.firstName} {profile.lastName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                style={{
                  width: "250px",
                  marginLeft: "20px"
                }}
              >
                <InputLabel>Tester:</InputLabel>
                <Select
                  name="tester"
                  onChange={e => onChange(e)}
                  value={tester}
                  variant="standard"
                >
                  {profiles.map(profile => (
                    <MenuItem value={profile} key={profile}>
                      {profile.firstName} {profile.lastName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth style={{ maxWidth: "1200px" }}>
                <TextField
                  className={classes.ticketDescription}
                  fullWidth
                  name="description"
                  value={description}
                  onChange={e => onChange(e)}
                  placeholder="Pls provide full description of the ticket.."
                  multiline={true}
                  rows={7}
                  rowsMax={15}
                  variant="outlined"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

NewTicketForm.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  createTicket: PropTypes.func.isRequired,
  profiles: PropTypes.array.isRequired,
  fetchProfiles: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  tickets: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  profiles: Object.values(state.profile.profiles),
  ticket: state.ticket,
  tickets: Object.values(state.ticket.tickets)
});

export default connect(
  mapStateToProps,
  {
    loadUser,
    fetchProfiles,
    fetchUsers,
    createTicket
  }
)(withRouter(NewTicketForm));
