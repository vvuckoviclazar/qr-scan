import { useState, useEffect, useRef } from "react";
import "./App.css";
import Btn from "./btn.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startLoading().then(() => startProcess());
    return () => clearInterval(intervalRef.current);
  }, []);

  function startLoading() {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  }

  const startProcess = () => {
    setIsCounting(true);
    setCount(5);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        console.log(prev);

        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsCounting(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <header>
        <pre>{isLoading}</pre>
        <pre>{isCounting}</pre>
        <Btn
          onClick={() => startLoading().then(() => startProcess())}
          isDisabled={isLoading || isCounting}
          variation="green"
        >
          Generate
        </Btn>
      </header>

      <div className={`container ${isLoading ? "load-mode" : ""}`}>
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className={`qr-div ${isCounting ? "green" : ""}`}>
              <img src="qr-code.png" className="qr-img" />
              <p className={`${isCounting ? "green-p" : ""}`}>Time is up!</p>
              <Btn
                onClick={() => startLoading().then(() => startProcess())}
                isDisabled={isLoading || isCounting}
                variation="green"
              >
                Generate
              </Btn>
            </div>

            <span className="stopwatch">{count} s</span>

            <div className="download-div">
              <Btn
                onClick={() => console.log("Download clicked")}
                variation="pink"
                isDisabled={isLoading || isCounting}
              >
                Download
              </Btn>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

// napravi da download-btn roze
// pogledaj zasto buttons nisu disable dok traje

// moras pocistiti interval
// moras da ga sacuvas u ref (pogledaj useRef)
// how to clear interval with useRef
