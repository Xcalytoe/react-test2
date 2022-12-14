import React, { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const cssClass =
    countValue <= -100 ? "red" : countValue >= 100 ? "green" : "";
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h3 data-testid="counter" className={cssClass}>
        {countValue}
      </h3>
      <div>
        <button
          data-testid="minus-btn"
          onClick={() => setCountValue(countValue - inputValue)}
        >
          -
        </button>
        <input
          type="number"
          data-testid="counter-input"
          style={{ textAlign: "center" }}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button
          data-testid="btn-plus"
          onClick={() => setCountValue(countValue + inputValue)}
        >
          +
        </button>
      </div>
      <style>
        {`
        .red{
            color:red;
        }
        .green{
            color:green;
        }
        `}
      </style>
    </div>
  );
};

export default Counter;
