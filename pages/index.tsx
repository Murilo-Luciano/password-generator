import React from "react";

export default function Home() {
  return (
    <>
      <div className="header">Password Generator</div>
      <div className="contentContainer">
        <div className="passwordDisplayContainer">
          <div className="passwordTextField">
            {"kjsa$jimd(i&"}
            <div>icon</div>
          </div>
          <div className="copyButton">COPY</div>
        </div>
        <div className="passwordOptionsContainer">
          <div className="slider"></div>
          <div className="checkboxContainer">
            <div>
              <input type={"checkbox"} />
              <label>Number</label>
            </div>
            <div>
              <input type={"checkbox"} />
              <label>Symbol</label>
            </div>
            <div>
              <input type={"checkbox"} />
              <label>Lowercase</label>
            </div>
            <div>
              <input type={"checkbox"} />
              <label>Uppercase</label>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Made by Murilo</div>
    </>
  );
}
