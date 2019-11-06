import React from "react";
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

const TicketList = ({ tickets }) => {
  const classes = useStyles();

  const formatDate = input => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(input).toLocaleDateString([], options);
  };
  const x = formatDate(Date.now());

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography className={classes.message}>Ticket Master</Typography>
          <Typography className={classes.subMessage}>{x}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.headers} align="left">
                  Source
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Type
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Ticketer
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Summary
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Fixer
                </TableCell>
                <TableCell className={classes.headers} align="left">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map(ticket => (
                <TableRow key={ticket.ticketId} value={ticket.ticket}>
                  <TableCell align="left">{ticket.source}</TableCell>
                  <TableCell align="left">{ticket.type}</TableCell>
                  <TableCell align="left">
                    {ticket.ticketer && ticket.ticketer.firstName}{" "}
                  </TableCell>
                  <TableCell align="left">{ticket.summary}</TableCell>
                  <TableCell align="left">
                    {ticket.fixer && ticket.fixer.firstName}{" "}
                    {ticket.fixer && ticket.fixer.lastName}
                  </TableCell>
                  <TableCell align="left">{ticket.status}</TableCell>
                  <TableCell align="left">{ticket.project}</TableCell>
                  <TableCell align="left">{ticket.process}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TicketList;
