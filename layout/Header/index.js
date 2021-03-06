import PathRoute from "common/PathRoute";
import React, { useEffect, useState } from "react";
import logo from "public/static/images/logo.svg";
import Link from "next/link";

// import NearbyAcademy from "./include/NearbyAcademy";

function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [fixHeader, setFixHeader] = useState(true);
  // const [defaultAcademy, setDefaultAcademy] = useState(
  //   JSON.parse(localStorage.getItem("defaultAcademy")) || {}
  // );

  // const siteReducer = useSelector((state) => state.siteReducer);
  // useEffect(() => {
  //     if (siteReducer.type) {
  //         if (
  //             siteReducer.type === siteActionType.FIND_NEARBY_SUCESS &&
  //             !defaultAcademy?.ms_id
  //         ) {
  //             setDefaultAcademy(siteReducer.data);
  //         }
  //         if (siteReducer.type === siteActionType.PICK_DEFAULT_ACADEMY) {
  //             setDefaultAcademy(
  //                 JSON.parse(localStorage.getItem('defaultAcademy')),
  //             );
  //         }
  //     }
  // }, [siteReducer]);

  // useEffect(() => {
  //     if (defaultAcademy)
  //         global.bookTraining = {
  //             siteId: defaultAcademy.ms_id,
  //             siteName: defaultAcademy.ms_name,
  //         };
  // }, [defaultAcademy]);

  function hideMenu() {
    setMenuMobile(false);
  }

  function handleScroll() {
    const newPos = document.body.getBoundingClientRect().top;
    if (newPos < -200 && fixHeader) setFixHeader(false);
    if (newPos > -150 && fixHeader) setFixHeader(true);
  }

  useEffect(() => {
    console.log("aaaas");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${fixHeader ? "" : "fix-header"}`} style={{}}>
      <div className="head-top-mobile">
        <div className="container">
          <Link href={PathRoute.Home}>
            <img src={logo} className="logo" alt="" />
          </Link>
          <button
            className={`btn-button icon-menu ${menuMobile ? "show" : ""}`}
            onClick={() => setMenuMobile(!menuMobile)}
          >
            menu
          </button>
        </div>
      </div>
      <div className={`navi ${menuMobile ? "show" : ""}`}>
        <div className="menu-top">
          <div className="container">
            <Link href={PathRoute.Home}>
              <img alt="" src={logo} className="logo" onClick={hideMenu} />
            </Link>
            <ul className="menu">
              <li className="menu-link">
                <Link href={PathRoute.WeeklyTraining} onClick={hideMenu}>
                  Weekly Training
                </Link>
              </li>
              <li className="menu-link">
                <Link href={PathRoute.HolidayCamp} onClick={hideMenu}>
                  Holiday Camps
                </Link>
              </li>
              <li className="menu-link">
                <Link href={PathRoute.OneTraining} onClick={hideMenu}>
                  1-on-1 Training
                </Link>
              </li>
              <li className="menu-link">
                <Link href={PathRoute.BirthdayParty} onClick={hideMenu}>
                  Birthday Parties
                </Link>
              </li>
              <li>
                <a
                  className="btn-book-free-session white-hover"
                  href={PathRoute.BookTrialTraining}
                  // onClick={(evt) => {
                  //   evt.preventDefault();
                  //   setMenuMobile(false);
                  //   if (defaultAcademy)
                  //     global.bookTraining = {
                  //       siteId: defaultAcademy.ms_id,
                  //       siteName: defaultAcademy.ms_name,
                  //     };
                  //   history.push(PathRoute.BookTrialTraining);
                  // }}
                >
                  {/* Book a{" "}
                  {defaultAcademy && defaultAcademy.ms_trial === 1
                    ? "trial"
                    : "free"}{" "} */}
                  session
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-down">
          <div className="container">
            <div className="menu-small widget-header">
              <div
                className="trustpilot-widget"
                data-locale="en-GB"
                data-template-id="5419b732fbfb950b10de65e5"
                data-businessunit-id="5630b23d0000ff000584db47"
                data-style-height="24px"
                data-style-width="100%"
                data-theme="light"
                style={{ marginLeft: "-16px" }}
              >
                <a
                  href="https://uk.trustpilot.com/review/wemakefootballers.com"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div>
            <ul className="menu-small">
              <li className="menu-link">
                <Link href={PathRoute.AboutUs} onClick={hideMenu}>
                  About
                </Link>
              </li>
              <li className="menu-link">
                <Link href={PathRoute.Contact} onClick={hideMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="menu-link">
                <Link href={PathRoute.Location} onClick={hideMenu}>
                  Locations
                </Link>
              </li>
              <li className="login">
                <a
                  href="https://www.parentarea.co/parent/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Login
                </a>
              </li>
              <li>{/* <NearbyAcademy onChangeLocation={hideMenu} /> */}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
