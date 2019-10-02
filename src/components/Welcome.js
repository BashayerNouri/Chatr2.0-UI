import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <header id="header" className="masthead d-flex">
        <div id="headerdiv" className="container text-center my-auto z-1">
          <h1 id="text" className="mb-1">
            WELCOME TO CHATR
          </h1>
          {!this.props.user && (
            <>
              <h3 className="mb-5">
                <em id="text2">
                  You're gonna need to login to see the messages
                </em>
              </h3>
              <Link to="/login" id="login" className="btn btn-primary btn-lg">
                Login
              </Link>
            </>
          )}
        </div>
        <div className="overlay z-0" />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Welcome);
