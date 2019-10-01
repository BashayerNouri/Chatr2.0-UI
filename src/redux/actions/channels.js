import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";

import axios from "axios";

export const fetchChannels = () => {
  return async dispatch => {
    try {
      const res = await axios.get("https://api-chatr.herokuapp.com/channels/");
      const channels = res.data;
      dispatch({ type: actionTypes.FETCH_CHANNELS, payload: channels });
    } catch (err) {
      console.error(err);
    }
  };
};
