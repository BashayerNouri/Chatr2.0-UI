import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/css/main.css";
import {
  fetchChannelDetail,
  fetchChannelDetailLatest,
  sendMessage,
  setLoading
} from "../redux/actions";
import Messages from "./Messages";
import AddMessage from "./AddMessage";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class SendMessageForm extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    // const timeStamp = this.props.match.params.channelID.latest;
    this.interval = setInterval(
      () => {
        if (this.props.match.params.channelID !== undefined)
          this.props.fetchChannelDetail(this.props.match.params.channelID);
      },
      1000
      // timeStamp
    );
  }

  // componentDidUpdate(prevProps) {
  //   const channelID = this.props.match.params.channelID;
  //   if (prevProps.match.params.channelID !== channelID) {
  //     this.props.fetchChannelDetail(channelID);
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelID !== undefined) {
      if (
        this.props.match.params.channelID !== prevProps.match.params.channelID
      ) {
        this.props.changeLoading();
        this.props.fetchChannelDetail(this.props.match.params.channelID);
      } else {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.props.fetchChannelDetail(this.props.match.params.channelID);
        }, 1000);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.sendMessage(
      this.props.match.params.channelID,
      this.state,
      this.props.user
    );
    let text = document.messageForm.message;
    text.value = "";
  };

  render() {
    if (this.props.loading) return <Loading />;
    if (!this.props.user) return <Redirect to="/login" />;
    const channel = this.props.channel;
    if (!!channel) {
      const messages = channel.map(message => (
        <Messages key={message.id} messages={message} />
      ));
      return (
        <div>
          {messages}

          <div style={{ textAlign: "center" }} className="mt-5 p-2">
            <form name="messageForm" onSubmit={this.submitHandler}>
              <div className="row" id="scroller">
                <div className="col-12">
                  <input
                    name="message"
                    value={this.state.message}
                    placeholder="Write your message..."
                    onChange={this.changeHandler}
                    className="input"
                  ></input>
                </div>

                <button id="send" type="submit" value="Send">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channel: state.channel.channel,
    currentChannel: state.channel.currentChannel,
    loading: state.channel.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (channelID, message, user) =>
      dispatch(sendMessage(channelID, message, user)),
    fetchChannelDetail: channelID => dispatch(fetchChannelDetail(channelID)),
    fetchChannelDetailLatest: (channelID, latest) =>
      dispatch(fetchChannelDetailLatest(channelID, latest)),
    changeLoading: () => dispatch(setLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessageForm);
