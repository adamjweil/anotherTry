import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";
import VerticalMenu from "./VerticalMenu";
import SearchDirectory from "./SearchDirectory";

class Directory extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <Fragment>
          <Grid container>
            {user.id}
            <Grid item xs={12} sm={4}>
              <div className="item" key={user.id} style={{ width: "45%" }}>
                <img
                  src={user.avatar}
                  alt=""
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="content" style={{ marginTop: "10px" }}>
                <Header as="h5">
                  <i className="mail icon" />
                  Email: {user.email}
                </Header>

                <div
                  className="description"
                  style={{ fontWeight: "50", fontDecorations: "italics" }}
                >
                  registered on... {user.date}
                </div>
              </div>
            </Grid>
          </Grid>
          <Header as="h3" dividing></Header>
        </Fragment>
      );
    });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={2}>
          <VerticalMenu />
        </Grid>
        <Grid item xs={10}>
          <center>
            <Header as="h2">meZocliQ Directory</Header>
            <Header as="p">
              Check out our Company Directory, organized by Employee, Team, and
              in the context of the overall organizational chart. Feel free to
              click on a specific Employee or Team to get additional details!
            </Header>
          </center>
          <Grid item xs={12}>
            <SearchDirectory />
          </Grid>
          <div className="ui celled list" style={{ marginTop: "-150px" }}>
            {this.renderList()}
          </div>
        </Grid>
      </Grid>
    );
  }
}

Directory.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { users: Object.values(state.users) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Directory);
