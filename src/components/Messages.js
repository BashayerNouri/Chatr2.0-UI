import React from "react";
import moment from "moment";
import "../assets/css/main.css";

const Messages = props => {
  console.log("props.background", props.background);
  return (
    <div id="bubbles">
      <img
        src="https://i.ibb.co/nQTNZF6/profile.png"
        alt="Avatar"
        className="image"
      ></img>
      <span className="username">
        <b>{props.messages.username}</b>
      </span>
      <div className="messages">
        <p>{props.messages.message}</p>
      </div>
      <span className="timestamp">
        {moment(props.messages.timestamp).calendar()}
      </span>
    </div>
  );
};

export default Messages;
