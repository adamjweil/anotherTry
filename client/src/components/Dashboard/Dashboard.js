import React, { Fragment, Component } from "react";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import DashboardDetails from "./DashboardDetails";
import NoProfile from "./NoProfile";
import YesProfile from "./YesProfile";
import TourGuide from "./TourGuide";

export class Dashboard extends Component {
  componentDidMount() {
    getCurrentProfile();
  }

  render() {
    const { profile, loading, user } = this.props;

    return loading && profile === null ? (
      <Spinner />
    ) : (
      <Grid container columns={2} divided relaxed stackable>
        <Grid item xs={6}>
          <Fragment>
            <img
              src={process.env.PUBLIC_URL + "/img/mezLogo120px.png"}
              style={{ width: "200px", margin: "-30px -20px -60px" }}
              alt={process.env.PUBLIC_URL + "/img/mezLogo240px.png"}
            />
            <br />
            <Header as="h3">
              Welcome to the meZocliQ Online Portal, {user && user.email}!
            </Header>

            {profile === null ? <NoProfile /> : <YesProfile />}
          </Fragment>
        </Grid>

        <Grid>
          <DashboardDetails />
          <TourGuide />
        </Grid>
        <Grid></Grid>
        <div
          style={{
            display: "in-line",
            position: "relative",
            top: "75%",
            bottom: "0px",
            left: "20px",
            right: "20px"
          }}
        ></div>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
