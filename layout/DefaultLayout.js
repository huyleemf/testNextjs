import React from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

const propTypes = {};

const DefaultLayout = ({ children }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="wapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = propTypes;
export default DefaultLayout;
