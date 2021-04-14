import type from "../actionTypes";

const initialState = {
  message: "",
  lstSite: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LIST_SITE_SUCCESS:
      return {
        ...state,
        type: type.GET_LIST_SITE_SUCCESS,
        lstSite: action.data.lstSite,
      };
    case type.GET_LIST_SITE_FAILED:
      return {
        ...state,
        type: type.GET_LIST_SITE_FAILED,
        message: action.message,
      };
    default:
      return state;
  }
};

export default listReducer;
