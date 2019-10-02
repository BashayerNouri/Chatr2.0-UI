import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channel: [],
  loading: true

  // filteredMessages: [],
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload,
        loading: false
      };
    case actionTypes.SET_MESSAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        channel: state.channel.concat(action.payload)
      };

    // case actionTypes.POST_MESSAGE:
    //   return {
    //     ...state,
    //     channel: state.channels.concat(action.payload)
    //   };

    default:
      return state;
  }
};

export default channelReducer;
