import React, { Fragment, useEffect, withRouter } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header, Image, Container, Body } from "semantic-ui-react";

import { fetchUsers } from "../../../actions/user";
import DirectoryTopMenu from './DirectoryTopMenu';

class Directory extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <Fragment>
          <Grid columns={16} inline>
            <Grid.Column width={4}>
              <div className="item" key={user.id} style={{ width: "45%" }}>
                <img
                  src={user.avatar}
                  alt="large middle aligned icon camera"
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
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
            </Grid.Column>
          </Grid>
          <Header as='h3' dividing ></Header>
        </Fragment>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='header'>
          <center><Header as="h2">meZocliQ Directory</Header></center>
        </div>
        <DirectoryTopMenu />
        <Grid columns={1} inline>
          <Grid.Column>
            <div className="ui celled list">{this.renderList()}</div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: Object.values(state.user) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Directory);
