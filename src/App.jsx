import { useState } from "react";
import "./App.css";
import Btn from "./btn.jsx";

function App() {
  return (
    <>
      <header>
        <Btn
          text="Generate"
          className="generate-btn-1"
          onClick={() => console.log("Generate clicked")}
        />
      </header>
      <div className="container">
        <div className="qr-div">
          <img src="qr-code.png" className="qr-img" />
          <p>Time is up!</p>
          <Btn
            text="Generate"
            className="generate-btn-2"
            onClick={() => console.log("Generate clicked")}
          />
        </div>
        <span className="stopwatch">0 s</span>
        <div className="download-div">
          <Btn
            text="Download"
            className="download-btn"
            onClick={() => console.log("Download clicked")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
