import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ChannelNavLink = class Channel extends React.Component {
  // state = {
  //   channel: "",
  //   changed: false
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.channel !== prevState.channel) {
  //     this.setState({ changed: true, channel: this.state.channel })

  //   }
  // }

  render() {
    const channel = this.props.channel;
    return (
      <li
        className="nav-item"
        data-toggle="tooltip"
        data-placement="right"
        title={channel.name}
        id="side"
      >
        <NavLink
          id="sidecolor"
          className="nav-link"
          to={`/channels/${channel.id}`}
        >
          <FontAwesomeIcon id="sidecolor" icon={faHashtag} />
          <span className="nav-link-text"> {channel.name}</span>
        </NavLink>
      </li>
    );
  }
};
{
  /* const mapStateToProps = state => {
  return {
    channel: state.channel,
    user: state.user
  };
}; */
}
{
  /* export default connect(mapStateToProps)(ChannelNavLink) */
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID))
  };
};
export default connect(mapDispatchToProps)(ChannelNavLink);
