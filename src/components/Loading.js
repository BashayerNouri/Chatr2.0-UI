import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Loading extends Component {
  render() {
    return (
      <div className="container m-4 p-5">
        <div className="spinner mx-auto text-center">
          <FontAwesomeIcon icon={faSpinner} spin size="4x" />
        </div>
      </div>
    );
  }
}

export default Loading;
