import types from "redux/actionTypes";

const initialState = {
  message: "",
  data: {},
};

const detailSiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAIL_SITE:
      return {
        ...state,
        // isFetching: true,
      };

    case types.GET_DETAIL_SITE_SUCCESS:
      return {
        ...state,
        type: types.GET_DETAIL_SITE_SUCCESS,
        data: action.data,
      };

    case types.GET_DETAIL_SITE_FAILED:
      return {
        ...state,
        type: types.GET_DETAIL_SITE_FAILED,
        message: action.message,
      };

    case types.CLEAR_DETAIL_SITE:
      return initialState;

    default:
      return state;
  }
};

export default detailSiteReducer;
