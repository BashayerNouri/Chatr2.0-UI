import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import * as actionCreators from "./redux/actions";

// Scripts
import main from "./assets/js/main";
import { connect } from "react-redux";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import LoginForm from "./components/LoginForm";
import SendMessageForm from "./components/MessageForm";

class App extends Component {
  componentDidMount() {
    main();
    this.props.fetchChannels();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <Route path="/private" component={SuperSecretPage} />
          {/* <Route path="/channels/:channelID" component={SendMessageForm} /> */}
          <Route
            path="/channels/:channelID/?latest=<TIMESTAMP>"
            component={SendMessageForm}
          />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(actionCreators.fetchChannels())
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
