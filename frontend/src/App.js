import React from "react";
import "./App.css";
import Thing from "./thing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ margin: "0 0 10vh 0" }}>BORK</h1>
        <img
          alt="doge"
          className="App-logo"
          src="https://www.stickpng.com/assets/thumbs/5845e755fb0b0755fa99d7f3.png"
        />
        <Thing />
      </header>
    </div>
  );
}

export default App;
