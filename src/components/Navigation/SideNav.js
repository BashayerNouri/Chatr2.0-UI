import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";

class SideNav extends React.Component {
  state = {
    collapsed: false,
    query: ""
  };

  setQuery = query => this.setState({ query });

  filterChannels = () => {
    const query = this.state.query.toLowerCase();

    return this.props.channels.filter(channel => {
      return `${channel.name}`.toLowerCase().includes(query);
    });
  };

  render() {
    const channelLinks = this.props.filteredChannels.map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));
    {
      {
        // console.log("Side nav this.state.filteredChannels", this.props.filteredChannels)
      }
      if (this.props.user) {
        return (
          <div id="sidebar">
            <ul className="navbar-nav navbar-sidenav " id="exampleAccordion">
              <SearchBar />

              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
                id="side"
              >
                <Link className="nav-link heading" to="/createChannel">
                  <span id="sidecolor" className="nav-link-text mr-2">
                    Create a channel
                  </span>
                  <FontAwesomeIcon id="sidecolor" icon={faPlusCircle} />
                </Link>
              </li>
              {channelLinks}
            </ul>
            <ul id="scroll" className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <span
                  className="nav-link text-center"
                  id="sidenavToggler"
                  onClick={() =>
                    this.setState(prevState => ({
                      collapsed: !prevState.collapsed
                    }))
                  }
                >
                  <FontAwesomeIcon
                    icon={this.state.collapsed ? faAngleRight : faAngleLeft}
                  />
                </span>
              </li>
            </ul>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.rootChannels.channels,
    filteredChannels: state.rootChannels.filteredChannels
  };
};

export default connect(mapStateToProps)(SideNav);
