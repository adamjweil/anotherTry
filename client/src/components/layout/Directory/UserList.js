import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea
} from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    height: 140,
    borderRadius: "5px"
  }
}));

const UserList = ({ users, fetchUsers }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return users.map(user => {
    return (
      <Grid
        item
        xs={12}
        sm={3}
        style={{ display: "inLine-block", margin: "15px" }}
      >
        <Card key={user.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              style={{ marginTop: "10px" }}
              image={user.avatar}
              title="User Avatar"
            />
            <CardContent>
              <Typography variant="h5" component="p">
                First Last
              </Typography>
              <Typography variant="h8" component="p">
                eMail: {user.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <center>
              <Button size="small" color="primary">
                Send Message
              </Button>
            </center>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { users: Object.values(state.users) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
