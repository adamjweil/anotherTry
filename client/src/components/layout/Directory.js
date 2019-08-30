import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllUsers } from '../../actions/auth';

const Directory = ({ loadAllUsers }) => {
  useEffect(() => {
    loadAllUsers()
  }, []);

  return (
    <div>
      Directory
    </div>
  );
}


const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps, { loadAllUsers })(Directory);
