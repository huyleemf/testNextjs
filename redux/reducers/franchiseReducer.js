import types from "redux/actionTypes";

const initialState = {
  data: {},
  error: null,
};

const franchiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FRANCHISE_DETAIL_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.GET_FRANCHISE_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };

    case types.GET_FRANCHISE_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case types.CLEAR_FRANCHISE_DETAIL:
      return initialState;

    default:
      return state;
  }
};

export default franchiseReducer;
