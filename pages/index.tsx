import { Checkbox, Slider } from "@mui/material";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GrRefresh } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <div className="header">Password Generator</div>
      <div className="contentContainer">
        <div className="passwordDisplayContainer">
          <div className="passwordTextField">
            {"kjsa$jimd(i&"}
            <IconContext.Provider value={{ className: "icon" }}>
              <GrRefresh />
            </IconContext.Provider>
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
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                Number
              </div>
              <div>
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                Symbol
              </div>
            </div>
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                Lowercase
              </div>
              <div>
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                Uppercase
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Made by Murilo</div>
    </>
  );
}
