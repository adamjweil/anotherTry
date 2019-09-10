import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TicketHubLeftMenu = () => {
  return (
    <div className="ui vertical menu">
      <div className="item">
        Notifications
        <div className="ui teal left pointing label">1</div>
      </div>
      <div className="item">
        Tickets
        <div className="menu">
          <div className="item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <a href="/" className="item">
            View All
          </a>
          <a href="/" className="active item">
            Add New
          </a>
          <a href="/" className="item">
            Edit Existing
          </a>
        </div>
      </div>
      <a href="/" className="item">
        <i className="grid layout icon"></i> Browse
      </a>

      <div className="item">
        Messages
        <div className="menu">
          <div className="item">
            <div className="ui input">
              <input
                icon="search icon"
                iconPosition="left"
                type="text"
                placeholder="Search mail..."
              />
            </div>
          </div>
          <Link to="/" className="item">
            Inbox
            <div className="ui label">1</div>
          </Link>
          <Link to="/" className="item">
            Sent
            <div className="ui label">10</div>
          </Link>
          <Link to="/" className="item">
            Spam
            <div className="ui label">51</div>
          </Link>
          <Link to="/" className="item">
            Updates
            <div className="ui label">1</div>
          </Link>
        </div>
      </div>
      <div className="ui dropdown item">
        More
        <i className="dropdown icon"></i>
        <div className="menu">
          <a href="/" className="item">
            <i className="edit icon"></i> Edit Profile
          </a>
          <a href="/" className="item">
            <i className="globe icon"></i> Choose Language
          </a>
          <a href="/" className="item">
            <i className="settings icon"></i> Account Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect()(TicketHubLeftMenu);
