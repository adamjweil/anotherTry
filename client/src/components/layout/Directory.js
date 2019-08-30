import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Directory = () => {

  return (
    <div>
      Directory
    </div>
  );
}


const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Directory);
