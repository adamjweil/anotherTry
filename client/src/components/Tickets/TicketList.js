import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TableHead,
  Table,
  TableCell,
  TableBody,
  TableRow,
  Typography,
  Paper
} from "@material-ui/core";
import { fetchTickets } from "../../actions/ticket";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(10, 1, 2)
  },
  table: {
    padding: theme.spacing(2)
  },
  paper: {
    margin: theme.spacing(1),
    width: "95%",
    padding: "20px",
    boxShadow: "2px 4px 6px 0 hsla(0, 0%, 0%, 0.6)"
  },
  message: {
    fontSize: "36px",
    fontWeight: "600",
    textAlign: "center"
  },
  subMessage: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#A9A9A9",
    textAlign: "center"
  },
  headers: {
    fontWeight: "800",
    fontSize: "16px",
    color: "black"
  }
}));

const TicketList = ({ users, tickets, fetchTickets }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography className={classes.message}>Tickets</Typography>
        </Grid>
        <Grid item xs={12}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.headers} align="left">
                  Ticketer
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Projects
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Buckets
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Process
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map(ticket => (
                <TableRow key={ticket.ticketId}>
                  <TableCell align="left">{ticket.ticketer}</TableCell>
                  <TableCell align="left">{ticket.project}</TableCell>
                  <TableCell align="left">{ticket.process}</TableCell>
                  <TableCell align="left">{ticket.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </Grid>
  );
};

TicketList.propTypes = {
  isAuthenticated: PropTypes.bool,
  tickets: PropTypes.array.isRequired,
  fetchTickets: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    tickets: Object.values(state.ticket.tickets)
  };
};

export default connect(
  mapStateToProps,
  { fetchTickets }
)(TicketList);
