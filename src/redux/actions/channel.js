import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";
import axios from "axios";

export const setLoading = () => ({
  type: actionTypes.SET_MESSAGES_LOADING
});

export const fetchChannelDetail = channelID => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api-chatr.herokuapp.com/channels/${channelID}/`
      );
      const channel = res.data;
      dispatch({
        type: actionTypes.FETCH_CHANNEL_DETAIL,
        payload: channel
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchChannelDetailLatest = (channelID, latest) => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api-chatr.herokuapp.com/channels/${channelID}/${latest}/`
      );
      const channelDetail = res.data;
      dispatch({
        type: actionTypes.FETCH_CHANNEL_DETAIL,
        payload: channelDetail
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const sendMessage = (channelID, message, user) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `https://api-chatr.herokuapp.com/channels/${channelID}/send/`,
        message
      );
      const messageObject = {
        id: user.user_id,
        username: user.username,
        message: res.data.message,
        channel: channelID
      };
      dispatch({
        type: actionTypes.SEND_MESSAGE,
        payload: messageObject
      });
    } catch (error) {
      console.error(error);
    }
  };
};
