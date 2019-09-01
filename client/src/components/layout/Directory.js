import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllUsers } from '../../actions/user';

const Directory = ({ loadAllUsers, users }) => {
  useEffect(() => {
    loadAllUsers()
  }, [])

  return (
        <div>
          <h2>Directory</h2>
        <h1>  { users && users.team } </h1>
        </div>
  );
}

Directory.propTypes = {
  users: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { loadAllUsers }
)(Directory);
