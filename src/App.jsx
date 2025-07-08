import { useState } from "react";
import "./App.css";
import Btn from "./btn.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);

  const startProcess = () => {
    if (isLoading || isCounting) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsCounting(true);
      setCount(5);

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsCounting(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2500);
  };

  return (
    <>
      <header>
        <Btn
          text="Generate"
          className="generate-btn-1"
          onClick={startProcess}
          disabled={isLoading || isCounting}
        />
      </header>

      <div className={`container ${isLoading ? "load-mode" : ""}`}>
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className={`qr-div ${isCounting ? "green" : ""}`}>
              <img src="qr-code.png" className="qr-img" />
              <p>{isCounting ? "" : "Time is up!"}</p>
              <Btn
                text="Generate"
                className="generate-btn-2"
                onClick={startProcess}
                disabled={isLoading || isCounting}
              />
            </div>

            <span className="stopwatch">{count} s</span>

            <div className="download-div">
              <Btn
                text="Download"
                className="download-btn"
                onClick={() => console.log("Download clicked")}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
