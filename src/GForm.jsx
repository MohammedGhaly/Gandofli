import { useState } from "react";

const url = `https://basharelmetwali.pythonanywhere.com/predict`;

function GForm({ setResult, setIsLoading }) {
  const [sex, setSex] = useState("m");
  const [height, setHeight] = useState(null);
  const [length, setLength] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [wholeWeight, setWholeWeight] = useState(null);
  const [shuckedWeight, setShuckedWeight] = useState(null);
  const [visceraWeight, setVisceraWeight] = useState(null);
  const [shellWeight, setShellWeight] = useState(null);

  function getFormData() {
    return {
      sex: [sex],
      height: [height],
      length: [length],
      diameter: [diameter],
      "whole weight": [wholeWeight],
      "shucked weight": [shuckedWeight],
      "viscera weight": [visceraWeight],
      "shell weight": [shellWeight],
    };
  }

  async function fetchResult() {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormData()),
      });
      const data = await response.json();
      return data.Prediction[0];
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleSubmit() {
    setIsLoading(true);
    const data = await fetchResult();
    console.log("data", data);
    setResult(data);
    setIsLoading(false);
  }

  return (
    <form
      className="g-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <select
        type="select"
        name="sex"
        placeholder="Sex"
        onChange={(e) => {
          setSex(e.target.value);
        }}
      >
        <option value="M">male</option>
        <option value="F">female</option>
      </select>

      <input
        step="0.001"
        className="number-input"
        type="number"
        name="height"
        placeholder="height"
        value={height}
        onChange={(e) => {
          setHeight(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="length"
        placeholder="length"
        value={length}
        onChange={(e) => {
          setLength(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="diameter"
        placeholder="diameter"
        value={diameter}
        onChange={(e) => {
          setDiameter(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="shuckedWeight"
        placeholder="shucked weight"
        value={shuckedWeight}
        onChange={(e) => {
          setShuckedWeight(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="wholeWeight"
        placeholder="whole weight"
        value={wholeWeight}
        onChange={(e) => {
          setWholeWeight(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="visceraWeight"
        value={visceraWeight}
        placeholder="viscera weight"
        onChange={(e) => {
          setVisceraWeight(Number(e.target.value));
        }}
      />
      <input
        step="0.001"
        className="number-input"
        type="number"
        name="shellWeight"
        value={shellWeight}
        placeholder="shell weight"
        onChange={(e) => {
          setShellWeight(Number(e.target.value));
        }}
      />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default GForm;
