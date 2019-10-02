import React from "react";
// import moment from "moment";
import "../assets/css/main.css";
const Messages = props => {
  console.log("props.background", props.background);
  return (
    <div>
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

      <span className="timestamp">
        {/* {moment(props.messages.timestamp).format("HH:mm A")} */}
      </span>
    </div>
  );
};

export default Messages;
