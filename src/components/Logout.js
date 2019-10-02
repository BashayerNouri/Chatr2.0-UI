import * as actionCreators from "../redux/actions";
import React from "react";
import { connect } from "react-redux";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Logout = props => {
  return (
    <li id="logout" className="nav-item" onClick={() => props.logout()}>
      <span className="nav-link">
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </span>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
