import React from "react";
import "../assets/css/main.css";
const Messages = props => {
  return (
    <div className="container">
      <img
        src="https://image.flaticon.com/icons/svg/17/17004.svg"
        alt="Avatar"
        className="image"
      ></img>
      <span className="username">
        <b>From: </b>
        {props.messages.username}
      </span>
      <div className="messages">
        <p>{props.messages.message}</p>
      </div>
      <span className="timestamp">{props.messages.timestamp}</span>
    </div>
  );
};

export default Messages;
