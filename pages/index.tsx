import { Slider } from "@mui/material";
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
          {/* <div className="slider"></div> */}
          <Slider
            sx={{
              color: "#BA4949",
              "& .MuiSlider-rail": {
                color: "white",
              },
              "& .MuiSlider-thumb": {
                color: "#D95252",
              },
            }}
          />
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
