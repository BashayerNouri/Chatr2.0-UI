import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: [],
  loading: true
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload
      };
    case actionTypes.SET_CHANNELS_LOADING:
      return {
        ...state,
        loading: true
      };

    // case actionTypes.POST_AUTHOR:
    //   return {
    //     ...state,
    //     authors: [action.payload].concat(state.authors)
    //   };
    default:
      return state;
  }
};

export default channelsReducer;
