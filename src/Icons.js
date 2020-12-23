import React, { useRef } from "react";
import { CgColorBucket, CgNotifications } from "react-icons/cg";
import { ImSpinner8, ImSpinner9 } from "react-icons/im";
import { BsCardText, BsTextIndentLeft } from "react-icons/bs";
import "./Icons.css";

export const ChangeColor = ({ func }) => (
  <div tabIndex="-1" onClick={() => func()} className="icon-container">
    <CgColorBucket size={"3em"} />
    Change Color
  </div>
);

export const ShowAnimation = ({ func }) => (
  <div tabIndex="-1" onClick={() => func()} className="icon-container">
    <ImSpinner9 size={"3em"} />
    Show Animation
  </div>
);

export const StopAnimation = ({ func }) => (
  <div tabIndex="-1" onClick={() => func()} className="icon-container">
    <ImSpinner8 size={"3em"} />
    Stop Animation
  </div>
);

export const SetMainText = ({ func }) => {
  const mainText = useRef(null);
  let value;

  return (
    <div onClick={() => mainText.current.focus()} className="icon-container">
      <BsCardText size={"3em"} />
      <input
        ref={mainText}
        type="text"
        placeholder="Set Main Text"
        onChange={(e) => (value = e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && mainText.current.blur()}
        onBlur={() => {
          value !== undefined && func(value);
          mainText.current.value = "";
        }}
      />
    </div>
  );
};

export const SetSecondaryText = ({ func }) => {
  const secondaryText = useRef(null);
  let value;

  return (
    <div
      onClick={() => secondaryText.current.focus()}
      className="icon-container"
    >
      <BsTextIndentLeft size={"3em"} />
      <input
        ref={secondaryText}
        type="text"
        placeholder="Set Secondary Text"
        onChange={(e) => (value = e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && secondaryText.current.blur()}
        onBlur={() => {
          value !== undefined && func(value);
          secondaryText.current.value = "";
        }}
      />
    </div>
  );
};

export const SetNotificationText = ({ func }) => {
  const notificationText = useRef(null);
  let value;

  return (
    <div
      onClick={() => notificationText.current.focus()}
      className="icon-container"
    >
      <CgNotifications size={"3em"} />
      <input
        ref={notificationText}
        type="text"
        placeholder="Set Notification Text"
        onChange={(e) => (value = e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && notificationText.current.blur()}
        onBlur={() => {
          value !== undefined && func(value);
          notificationText.current.value = "";
        }}
      />
    </div>
  );
};
