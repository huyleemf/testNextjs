import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import articleReducer from "./articleReducer";
import siteReducer from "./siteReducer";
import headerReducer from "./headerReducer";
import franchiseReducer from "./franchiseReducer";
import detailSiteReducer from "./detailSiteReducer";
import aboutReducer from "./aboutReducer";
import listSiteReducer from "./listSiteReducer";
import policyReducer from "./policyReducer";
import sendFormReducer from "./sendFormReducer";

const allReducers = combineReducers({
  loginReducer,
  homeReducer,
  siteReducer,
  articleReducer,
  headerReducer,
  franchiseReducer,
  detailSiteReducer,
  aboutReducer,
  listSiteReducer,
  policyReducer,
  sendFormReducer,
});

export default allReducers;
