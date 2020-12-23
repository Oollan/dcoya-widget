import React from "react";
import tinycolor from "tinycolor2";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import "./Animation.css";

let previousColor;

const randomColor = () => tinycolor.random();
const changeColor = (color) => {
  const css = {
    "--firstColor": color,
    "--secondColor": tinycolor(color).lighten(3).toString(),
    "--thirdColor": tinycolor(color).lighten(6).toString(),
    "--fourthColor": tinycolor(color).lighten(9).toString(),
  };
  tinycolor(color).darken(18).toString();
  previousColor = color;
  return css;
};

const Animation = ({ animated, color, main, secondary, notification }) => {
  !color && (color = previousColor);

  return (
    <div data-tip className="animation-container" style={changeColor(color)}>
      <ReactTooltip place="top" type="dark" effect="float">
        <li>Animated: {animated.toString()}</li>
        <li>Color: {color.toString()}</li>
        <li>Main Text: {main}</li>
        <li>Secondary Text: {secondary}</li>
        <li>Notification Text: {notification}</li>
      </ReactTooltip>
      <div className="text">
        <div className="main">{main}</div>
        <div className="secondary">{secondary}</div>
      </div>
      <div className="notification">{notification}</div>
      <motion.div
        animate={
          animated
            ? {
                scaleX: 1,
                scaleY: [1, 0.9],
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: animated ? 1 : 0.5,
          repeatType: "reverse",
          repeat: animated && Infinity,
          ease: "linear",
        }}
        className="ring first"
      ></motion.div>
      <motion.div
        animate={
          animated
            ? {
                scaleX: [1, 1, 0.9, 1, 0.9],
                scaleY: [1, 0.9, 1, 0.9, 1],
                rotate: [31, 121, 211, 301, 391],
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: animated ? 6 : 0.5,
          repeatType: "reverse",
          repeat: animated && Infinity,
          ease: "linear",
        }}
        className="ring second"
      ></motion.div>
      <motion.div
        animate={
          animated
            ? {
                scaleX: [1, 0.9],
                scaleY: 1,
                rotate: [413, 233, 53],
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: animated ? 2 : 0.5,
          repeatType: "reverse",
          repeat: animated && Infinity,
          ease: "linear",
        }}
        className="ring third"
      ></motion.div>
      <motion.div
        animate={
          animated
            ? {
                scaleX: [1, 1, 0.9, 1, 0.9],
                scaleY: [1, 0.9, 1, 0.9, 1],
                rotate: [472, 382, 292, 202, 112],
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: animated ? 4 : 0.4,
          repeatType: "reverse",
          repeat: animated && Infinity,
          ease: "linear",
        }}
        className="ring fourth"
      ></motion.div>
    </div>
  );
};

export default Animation;
export { randomColor };
