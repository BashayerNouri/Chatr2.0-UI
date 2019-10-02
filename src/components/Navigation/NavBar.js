import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav" id="mainNav">
      <Link className="navbar-brand nav" to="/welcome">
        Chatr2.0
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {!!props.user && (
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <SideNav />
        </div>
      )}
      <AuthButton />
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(NavBar);
