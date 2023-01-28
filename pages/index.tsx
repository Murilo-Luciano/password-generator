import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
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
            <div className="checkbox">
              <Checkbox sx={{ color: "white" }} />
              Number
            </div>
            <div className="checkbox">
              <Checkbox sx={{ color: "white" }} />
              Symbol
            </div>
            <div className="checkbox">
              <Checkbox sx={{ color: "white" }} />
              Lowercase
            </div>
            <div className="checkbox">
              <Checkbox sx={{ color: "white" }} />
              Uppercase
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Made by Murilo</div>
    </>
  );
}
