import React from "react";

import DisplayThoughtButton from "./DisplayThoughtButton";

function MainView() {
  return (
    <div id="container">
      <div className="MainView">
        <div className="title">Cabalistic Necromancer</div>
        <p>How it works: Press the button and Cabalistic Necromancer will read the mind of a random employee here at PDQ.com</p>
      </div>
      <div className="launchDiv">
        <DisplayThoughtButton />
      </div>
    </div>
  )
}

export default MainView;
