import React from "react";
import { connect } from "react-redux";
import { getNotifications } from "../selectors/notifications";

const Notifications = ({ notifications }) => {
  return (
    <div>
      {notifications.map(note => (
        <div key={note}>{note}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notifications: getNotifications(state)
  };
};

export default connect(mapStateToProps)(Notifications);
