import React, { Component } from "react";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

class Channel extends Component {
  // im not using this file

  componentDidMount() {
    this.props.fetchChannelDetail(this.props.match.params.channelID);
  }
  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      this.props.fetchChannelDetail(channelID);
    }
  }

  render() {}
}

const mapStateToProps = state => ({
  user: state.user,
  channel: state.channel
});

const mapDispatchToProps = dispatch => {
  return {
    //   fetchChannels: () => dispatch(actionCreators.fetchChannels()),
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
