import React, { Fragment, useEffect, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";
import { Grid, Container } from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";
// import DirectoryTopMenu from "./DirectoryTopMenu";
import SecondaryMenu from "./SecondaryMenu";

class Directory extends Component {
  componentDidMount() {
    fetchUsers();
  }

  renderList() {
    this.props.users.map(user => (
      <Fragment>
        <Grid container>
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
    ));
  }

  render() {
    return (
      <Container>
        <div className="header">
          <center>
            <Header as="h2">meZocliQ Directory</Header>
          </center>
        </div>
        <SecondaryMenu />
        <Grid container>
          <Grid item xs={12}>
            <div className="ui celled list">{this.renderList()}</div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Directory.propTypes = {
  fetchUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: Object.values(state.users)
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Directory);
