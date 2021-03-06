import { all } from "redux-saga/effects";
import watcherHomeSage, { watchGetHome, watchGetAbout } from "./homeSaga";
import watcherSiteSaga from "./siteSaga";
import watcherArticleSaga from "./articleSaga";
import watcherFranchiseSaga from "./franchiseSaga";
import watcherDetailSite from "./detailSiteSaga";
import watcherAbout from "./aboutSaga";
import watcherBookTrialTraining from "./bookTrialTrainingSaga";
import watcherPolicySaga from "./policySaga";
import watcherSendFormSaga from "./sendFormSaga";

export default function* rootSaga() {
  yield all([
    watcherSiteSaga(),
    watcherArticleSaga(),
    watcherFranchiseSaga(),
    watcherHomeSage(),
    watcherDetailSite(),
    watcherAbout(),
    watcherBookTrialTraining(),
    watcherPolicySaga(),
    watcherSendFormSaga(),
  ]);
}
