/* eslint-disable import/prefer-default-export */
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import type from "../actionTypes";
import API from "../../requests/API";
import { APIConfig } from "../../requests/ApiConfig";
import siteService from "services/siteService";

function* getHome({ callbacks }) {
  try {
    const response = yield siteService.getHome();

    console.log(response, "response home");
    if (response && response.status === 200) {
      callbacks && callbacks.onSuccess(response);
      yield put({
        type: type.GET_HOME_SUCCESS,
        data: response.data.data,
      });
    } else {
      // show message
      callbacks && callbacks.onFailed(response.data.message);
      yield put({
        type: type.GET_HOME_FAILED,
        message: response ? response.data.message : "",
      });
    }
  } catch (error) {
    callbacks && callbacks.onFailed(error);
    yield put({
      type: type.GET_HOME_FAILED,
      message: error,
    });
  }
}

export default function* watcherHomeSage() {
  yield takeLatest(type.GET_HOME, getHome);
}
