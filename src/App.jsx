import GForm from "./GForm";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./form.css";

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showInRings, setShowInRings] = useState(true);

  return (
    <>
      <header>Abalone Age Calculator</header>
      <section className="main">
        <div className="form-container">
          <div>
            <h1 className="form-title">
              Enter the details of your Abalone below
            </h1>
            <GForm setResult={setResult} setIsLoading={setIsLoading} />
          </div>
        </div>
        <div className="result-container">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <p>
              {result.length === 0 &&
                "This is a web App to help you predict the age of 'Abalone' using AI"}
              {result.length > 0 && `the expected age of your Abalone is`}
              {result.length > 0 && (
                <>
                  <br></br>
                  <br></br>
                  {showInRings && (
                    <span
                      onClick={() => {
                        setShowInRings(false);
                      }}
                    >{`${result[0].toFixed(1)} rings`}</span>
                  )}
                  {!showInRings && (
                    <span
                      onClick={() => {
                        setShowInRings(true);
                      }}
                    >{`${(result[0] + 1.5).toFixed(1)} years`}</span>
                  )}
                </>
              )}
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
