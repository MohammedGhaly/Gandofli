import GForm from "./GForm";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./App.css";
import "./form.css";

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <header>Gandofli Age Calculator</header>
      <section className="main">
        <div className="form-container">
          <div>
            <h1 className="form-title">
              Enter the details of your Gandofli below
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
                "This is a web App to help you predict the age of 'Gandofli' using AI"}
              {result.length > 0 && `the expected age of your Gandofli is`}
              {result.length > 0 && (
                <>
                  <br></br>
                  <br></br>
                  <span>{`${result[0].toFixed(1)} yrs`}</span>
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
