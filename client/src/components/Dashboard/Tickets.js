import React from 'react';

const Tickets = () => {
  return (

      <div className="ui vertical menu">
        <div className="item">
          <div className="ui input">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="item">
          Home
          <div className="menu">
            <a href='/' className="active item">Search</a>
            <a href='/' className="item">Add</a>
            <a href='/' className="item">Remove</a>
          </div>
        </div>
        <a href='/' className="item">
          <i className="grid layout icon"></i> Browse
        </a>
        <a href='/' className="item">
          Messages
        </a>
        <div className="ui dropdown item">
          More
          <i className="dropdown icon"></i>
          <div className="menu">
            <a href='/' className="item"><i className="edit icon"></i> Edit Profile</a>
            <a href='/' className="item"><i className="globe icon"></i> Choose Language</a>
            <a href='/' className="item"><i className="settings icon"></i> Account Settings</a>
          </div>
        </div>
      </div>
  )
}

Tickets.propTypes = {

}

export default Tickets;
