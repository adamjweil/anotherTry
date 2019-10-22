import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TableHead,
  Table,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import { fetchTickets } from "../../actions/ticket";

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    height: 140,
    borderRadius: "5px"
  }
}));

const TicketList = ({ tickets, fetchTickets }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTickets();
  });
  return (
    <Grid item xs={12}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticketer</TableCell>
            <TableCell align="right">Projects</TableCell>
            <TableCell align="right">Buckets</TableCell>
            <TableCell align="right">Process</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map(ticket => (
            <TableRow key={ticket.ticketId}>
              <TableCell align="right">{ticket.ticketer}</TableCell>
              <TableCell align="right">{ticket.project}</TableCell>
              <TableCell align="right">{ticket.process}</TableCell>
              <TableCell align="right">{ticket.statuc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(
  mapStateToProps,
  { fetchTickets }
)(TicketList);
