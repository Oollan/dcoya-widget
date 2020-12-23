import React, { useState } from "react";
import ReactDOM from "react-dom";
import "fontsource-open-sans";

import Animation, { randomColor } from "./Animation";
import {
  ChangeColor,
  ShowAnimation,
  StopAnimation,
  SetMainText,
  SetSecondaryText,
  SetNotificationText,
} from "./Icons";

const App = () => {
  const [color, setColor] = useState(randomColor());
  const [colorChanged, isColorChanged] = useState(true);
  const [animated, setAnimated] = useState(true);
  const [mainText, setMainText] = useState(58);
  const [secondaryText, setSecondaryText] = useState("Your Score");
  const [notificationText, setNotificationText] = useState(3);

  const showAnimation = () => setAnimated(true);
  const stopAnimation = () => setAnimated(false);

  return (
    <>
      <ChangeColor
        func={() => {
          isColorChanged(true) || setColor(randomColor());
        }}
      />
      <ShowAnimation
        func={() => isColorChanged(false) || (!animated && showAnimation())}
      />
      <StopAnimation
        func={() => isColorChanged(false) || (animated && stopAnimation())}
      />
      <SetMainText func={(text) => setMainText(text)} />
      <SetSecondaryText func={(text) => setSecondaryText(text)} />
      <SetNotificationText func={(text) => setNotificationText(text)} />
      <Animation
        animated={animated}
        color={colorChanged && color}
        main={mainText}
        secondary={secondaryText}
        notification={notificationText}
      />
    </>
  );
};

module.hot && module.hot.accept();
ReactDOM.render(<App />, document.getElementById("root"));
