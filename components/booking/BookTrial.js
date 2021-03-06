import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { siteActionType } from "redux/actionTypes";
import Utils from "common/Utils";
import PropTypes from "prop-types";
import PathRoute from "common/PathRoute";
import useGetWidth from "hooks/useGetWidth";
import useComponentVisible from "hooks/useComponentVisible";
import Flatpickr from "react-flatpickr";

BookTrial.propTypes = {
  parentFb: PropTypes.object,
};

function BookTrial(props) {
  const siteReducer = useSelector((state) => state.siteReducer);
  const { lstSite } = useSelector((state) => state.listSiteReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  // const dispatch = useDispatch();
  const defaultAcademy = JSON.parse(localStorage.getItem("defaultAcademy"));
  const [showSelect, setShowSelect] = useState(false);
  const [location, setLocation] = useState(
    defaultAcademy ? defaultAcademy.ms_name : ""
  );
  const [locationId, setLocationId] = useState(
    defaultAcademy ? defaultAcademy.ms_id : 0
  );
  const [trialText, setTrialText] = useState(
    defaultAcademy && defaultAcademy.ms_trial === 1 ? "trial" : "free trial"
  );
  const [date, setDate] = useState({});
  const [email, setEmail] = useState("");
  const [locationError, setLocationError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const { parentFb } = props;
  const width = useGetWidth();
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(true);

  useEffect(() => {
    if (siteReducer.type) {
      if (
        siteReducer.type === siteActionType.GET_CURRENT_ACADEMY_SUCCESS &&
        siteReducer.number === 2
      ) {
        setLocation(siteReducer.data.ms_name);
        setTrialText(
          siteReducer.data && siteReducer.data.ms_trial === 1 ? "trial" : "free"
        );

        setLocationId(siteReducer.data ? siteReducer.data.ms_id : "");
      }
    }
  }, [siteReducer]);

  useEffect(() => {
    if (!isComponentVisible && showSelect) {
      setShowSelect(!showSelect);
    }
  }, [isComponentVisible]);

  function onClickLocation(event) {
    setShowSelect(false);
    setLocation(event.target.textContent);
    setLocationId(event.target.getAttribute("data-target"));
    parseInt(event.target.getAttribute("data-trial"));
    setTrialText(
      parseInt(event.target.getAttribute("data-trial")) === 1
        ? "trial"
        : "free trial"
    );
  }

  function validateInput() {
    let checkInput = true;
    if (location === "") {
      checkInput = false;
      setLocationError("Field is required.");
    }
    if (email === "" || !Utils.checkEmail(email)) {
      checkInput = false;
      setEmailError("Field is required.");
    }
    if (date === "") {
      checkInput = false;
      setDateError("Field is required.");
    }
    return checkInput;
  }

  return (
    <div className="book_your_child_free_session" id="booking">
      <div className="container">
        <h2 className="heading">
          Book your child&apos;s free <br /> training session today
        </h2>
        <div className="text-sub">
          It only takes three minutes to get your {trialText}.
        </div>
        <div className="full-width">
          <ul className="list-form">
            <li>
              <label className="label">
                Select Academy
                <a
                  href="/#"
                  className="location"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setShowSelect(false);
                    setLocation("Loading...");
                    Utils.getCurrentAcademy(dispatch, 2);
                  }}
                >
                  <span>Use </span>current location
                </a>
              </label>
              <div ref={ref} className="custom-select">
                <div
                  className="select-selected"
                  onClick={() => {
                    setIsComponentVisible(true);
                    setShowSelect(!showSelect);
                    setLocationError("");
                    return false;
                  }}
                >
                  {location === "" ? "Select Academy" : location}
                </div>

                <div
                  className={`select-items ${showSelect ? "" : "select-hide"}`}
                >
                  {lstSite &&
                    lstSite.map((item) => (
                      <div
                        key={item.ms_id}
                        data-target={item.ms_id}
                        data-trial={item.ms_trial || 0}
                        onClick={onClickLocation}
                      >
                        {item.ms_name}
                      </div>
                    ))}
                </div>
              </div>
              <label className="input-error">{locationError}</label>
            </li>
            <li>
              <label className="label">Your Email *</label>
              <input
                type="text"
                className="input-text"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError("");
                }}
              />
              <label className="input-error">{emailError}</label>
            </li>
            <li>
              <label className="label">Child's date of birth *</label>
              {/* <DatePicker
                                className="input-text"
                                selected={date}
                                onChange={(date) => setDate(date)}
                            /> */}

              <Flatpickr
                data-enable-time
                className="input-text"
                value={date}
                options={{
                  mode: "single",
                  dateFormat: "m/d/Y",
                  allowInput: true,
                  enableTime: false,
                }}
                placeholder="Select date..."
                onChange={(date) => {
                  // getClassTime(new Date(date));
                  setDate(date[0]);
                }}
              />
              <label className="input-error">{dateError}</label>
            </li>
            <li>
              <button
                className="btn-button-s"
                onClick={() => {
                  if (validateInput()) {
                    global.bookTraining = {
                      siteId: locationId,
                      siteName: location,
                      email: email,
                      date: moment(date).format("M/D/Y"),
                    };
                    history.push(PathRoute.BookTrialTraining);
                    // dispatch({
                    //     type: siteActionType.BOOK_TRAINING,
                    //     param,
                    // });
                  }
                }}
              >
                Book a {trialText} training session
              </button>
            </li>
          </ul>
          <div className="col-right">
            {parentFb && (
              <div className="box-acc-review">
                <img
                  src={Utils.getThumb(parentFb.fb_image, "c1")}
                  className="avatar"
                  alt=""
                />
                <div className="info">
                  <p className="description">{parentFb.fb_content}</p>
                  <h3 className="name">
                    {parentFb.fb_name}, {parentFb.fb_role}
                  </h3>
                  <a href="/#" className="alink">
                    {" "}
                  </a>
                </div>
              </div>
            )}
            <div
              style={{ marginTop: 30, height: 0 }}
              className="trustpilot-widget"
              data-locale="en-GB"
              data-template-id="5418015fb0d04a0c9cf721f2"
              data-businessunit-id="5630b23d0000ff000584db47"
              data-style-height="300px"
              data-style-width="100%"
              data-theme="light"
              data-stars="4,5"
              data-review-languages="en"
            >
              <a
                className="alink"
                href="https://uk.trustpilot.com/review/wemakefootballers.com"
                target="_blank"
                rel="noopener"
              >
                See more Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTrial;
