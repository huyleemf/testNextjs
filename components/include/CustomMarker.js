import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker } from "react-google-maps";
import { siteActionType } from "redux/actionTypes";

function CustomMarker(props) {
  const siteReducer = useSelector((state) => state.siteReducer);
  const DEFAULT_ICON = require("images/marker.png");
  // const [defaultIcon, setDefaultIcon] = useState(DEFAULT_ICON);
  const dispatch = useDispatch();
  const { item } = props;
  const defaultIcon =
    siteReducer.marker.ms_id === item.ms_id
      ? require("images/marker-selected.png")
      : DEFAULT_ICON;

  return (
    <Marker
      // animation={window.google.maps.Animation.DROP}
      onClick={() => {
        // console.log(item, 'selected');
        if (item.ms_id) {
          props.selectAcademy(item);
          dispatch({
            type: siteActionType.SELECTED_MARKER,
            data: item,
          });
        }
      }}
      icon={defaultIcon}
      position={{
        lat: parseFloat(item.ms_latitude),
        lng: parseFloat(item.ms_longitude),
      }}
    />
  );
}

export default CustomMarker;
