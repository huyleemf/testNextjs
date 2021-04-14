import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoWhite from "public/static/images/logo-white.png";
// import type, { siteActionType } from "redux/actions/actionTypes";
import PathRoute from "common/PathRoute";
// import useComponentVisible from "hooks/useComponentVisible";
import _ from "lodash";
import Link from "next/link";

function Footer() {
  //! state
  //   const siteReducer = useSelector((state) => state.siteReducer);
  //   const listSiteReducer = useSelector((state) => state.listSiteReducer);
  //   const { lstSite } = listSiteReducer;
  //   const dispatch = useDispatch();
  const [showSelect, setShowSelect] = useState(false);
  //   const [location, setLocation] = useState("");
  // const [defaultAcademy, setDefaultAcademy] = useState(
  //     JSON.parse(localStorage.getItem('defaultAcademy')) || {},
  // );
  //   const [footerConfig, setFooterConfig] = useState([]);
  //   const [socialAcademy, setSocialAcademy] = useState([]);
  //   const {
  //     ref,
  //     isComponentVisible,
  //     setIsComponentVisible,
  //   } = useComponentVisible(true);

  //! useEffect
  // useEffect(() => {
  //     dispatch({
  //         type: 'GET_FOOTER_CONFIG',
  //     });
  // }, []);

  // useEffect(() => {
  //     setLocation(defaultAcademy?.ms_name);
  //     setSocialAcademy(defaultAcademy?.social);
  // }, [defaultAcademy]);

  // useEffect(() => {
  //     if (!isComponentVisible && showSelect) {
  //         setShowSelect(!showSelect);
  //     }
  // }, [isComponentVisible]);

  // useEffect(() => {
  //     if (siteReducer.type) {
  //         if (siteReducer.type === siteActionType.PICK_DEFAULT_ACADEMY) {
  //             setDefaultAcademy(
  //                 JSON.parse(localStorage.getItem('defaultAcademy')),
  //             );
  //         }
  //         if (siteReducer.type === type.GET_FOOTER_CONFIG_SUCCESS) {
  //             setFooterConfig(siteReducer.footerConfig.cfg_value);
  //         }
  //     }
  // }, [siteReducer]);

  // useEffect(() => {
  //     if (!_.isEmpty(lstSite) && location === '') {
  //         setLocation(lstSite[0].ms_name);
  //     }
  // }, [listSiteReducer]);

  // //! function
  // function onClickLocation(event, item) {
  //     setShowSelect(!showSelect);
  //     setLocation(event.target.textContent);
  //     localStorage.setItem('defaultAcademy', JSON.stringify(item));
  //     dispatch({
  //         type: siteActionType.PICK_DEFAULT_ACADEMY,
  //     });
  //     // window.scrollTo(0, 0);
  //     window.location.reload();
  // }

  return (
    <div className="footer">
      <div className="container">
        <div className="box-contact">
          <img src={logoWhite} alt="" />
          <ul className="list">
            <li className="mail">
              <a
              // href={`mailto:${defaultAcademy ? defaultAcademy.ms_email : ""}`}
              >
                Make an enquiry
              </a>
            </li>
            <li className="call">
              <a
              // href={`tel:${
              //   (defaultAcademy && defaultAcademy.ms_phone) ||
              //   (footerConfig && footerConfig[1]?.des)
              // }`}
              >
                {/* {(defaultAcademy && defaultAcademy.ms_phone) ||
                  (footerConfig && footerConfig[1]?.des)} */}
              </a>
            </li>
            <li className="calender"> Mon-Fri 9am - 5pm </li>
          </ul>
        </div>
        <div className="box-right">
          <ul className="list">
            <li>
              <Link href={PathRoute.AboutUs}>About Us</Link>
            </li>
            <li>
              <Link href={PathRoute.JoinUs}>Join Us</Link>
            </li>
            <li>
              <Link href={PathRoute.SchoolTraining}>School Partnerships</Link>
            </li>
            <li>
              <a
                href="https://franchisewmf.com/ "
                target="_blank"
                rel="noreferrer"
              >
                Franchise With Us
              </a>
            </li>
            <li>
              <Link href={PathRoute.ListQNA}>FAQs</Link>
            </li>
          </ul>
          <ul className="list">
            <li>
              <Link href="/location">Locations</Link>
            </li>
            <li>
              <a
                href=" https://www.kitlocker.com/wemakefootballers/"
                target="_blank"
                rel="noreferrer"
              >
                Shop
              </a>
            </li>
            <li>
              <Link href={PathRoute.HomeNews}>Training Tips</Link>
            </li>
            <li>
              <div
                //   ref={ref}

                className="custom-select"
              >
                <div
                  className="select-selected"
                  onClick={() => {
                    setIsComponentVisible(true);
                    setShowSelect(!showSelect);
                  }}
                >
                  {/* {location ? location.substring(0, 12) : "Select academy"} */}
                </div>
                <div className={`select-items ${!showSelect && "select-hide"}`}>
                  {/* {lstSite.map((item) => (
                    <div
                      key={item.ms_id}
                      onClick={(e) => {
                        onClickLocation(e, item);
                      }}
                    >
                      {item.ms_name}
                    </div>
                  ))} */}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Social">
          {/* {socialAcademy && socialAcademy.length > 0 ? (
            <Fragment>
              {socialAcademy.map((item) => {
                if (item.name === "Facebook")
                  return (
                    <a
                      key={1}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-fb"
                    />
                  );
                if (item.name === "Instagram")
                  return (
                    <a
                      key={2}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-lin"
                    />
                  );
                if (item.name === "Twitter")
                  return (
                    <a
                      key={3}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-wt"
                    />
                  );
              })}
            </Fragment>
          ) : (
            <Fragment>
              {footerConfig &&
                footerConfig.length > 0 &&
                footerConfig.map((item) => {
                  if (item.title === "Facebook")
                    return (
                      <a
                        key={1}
                        href={item.des}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-fb"
                      />
                    );
                  if (item.title === "Insta")
                    return (
                      <a
                        key={2}
                        href={item.des}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-lin"
                      />
                    );
                  if (item.title === "Twitter")
                    return (
                      <a
                        key={3}
                        href={item.des}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-wt"
                      />
                    );
                })}
            </Fragment>
          )} */}

          <div className="menu-ft">
            <Link href="/policies/privacy">Privacy Policy</Link>|
            <Link href={PathRoute.ListQNA}> FAQ</Link>
            <span>|</span>
            <Link href="/policies">Terms &amp; Conditions</Link>|
            <a href="/#">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
