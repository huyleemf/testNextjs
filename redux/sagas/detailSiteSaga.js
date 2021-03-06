import actionTypes from "redux/actionTypes";
import siteService from "services/siteService";
import { put, takeLatest } from "redux-saga/effects";

function* detailSite(data) {
  const { lstSite, currentAcademyId, cate } = data;

  try {
    const id = currentAcademyId || lstSite[0].ms_id;

    if (id) {
      const response = yield siteService.getDetailSite({ id, cate });
      if (response && response.status === 200) {
        yield put({
          type: actionTypes.GET_DETAIL_SITE_SUCCESS,
          data: response.data?.data,
        });
      } else {
        yield put({
          type: actionTypes.GET_DETAIL_SITE_FAILED,
          message: response ? response.message : "",
        });
      }
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_DETAIL_SITE_FAILED,
      message: error,
    });
  }
}

export default function* watcherDetailSite() {
  yield takeLatest(actionTypes.GET_DETAIL_SITE, detailSite);
}
