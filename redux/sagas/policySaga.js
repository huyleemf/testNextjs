import actionTypes from "redux/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import siteService from "services/siteService";
import API from "requests/API";
import { APIConfig } from "requests/ApiConfig";

function* getPolicy(data) {
  try {
    const response = yield siteService.getPolicy();
    if (response && response.status === 200) {
      yield put({
        type: actionTypes.GET_POLICY_SUCCESS,
        data: response.data.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_POLICY_FAILED,
        message: response ? response.message : "",
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_POLICY_FAILED,
      error,
    });
  }
}

export default function* watcherPolicySaga() {
  yield takeLatest(actionTypes.GET_POLICY, getPolicy);
}
