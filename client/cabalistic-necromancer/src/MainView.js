import React from "react";

import Button, {LaunchButton} from "./Button";
import ThoughtData from "./ThoughtData";

function MainView() {
  return (
    <div id="container">
      <div className="MainView">
        <div className="title">Cabalistic Necromancer</div>
        <p>How it works: Press the button and Cabalistic Necromancer will read the mind of a random employee here at PDQ.com</p>
      </div>
      <div className="launchDiv">
        <LaunchButton>
          Launch
        </LaunchButton>
        <ThoughtData />
      </div>
      <div className="content">Hello</div>
    </div>
  )
}

export default MainView;
