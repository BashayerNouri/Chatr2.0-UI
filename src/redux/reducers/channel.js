import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channel: []
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload
      };
    case actionTypes.FETCH_CHANNEL_DETAIL_LATEST:
      return {
        ...state,
        channel: action.payload
      };
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        channel: state.channel.concat(action.payload)
      };
    default:
      return state;
  }
};

export default channelReducer;
