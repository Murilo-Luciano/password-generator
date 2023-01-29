import { Checkbox, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GrRefresh } from "react-icons/gr";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [hasNumber, setHasNumber] = useState(true);
  const [hasSymbol, setHasSymbol] = useState(true);
  const [hasLowercase, setHasLowercase] = useState(true);
  const [hasUppercase, setHasUppercase] = useState(true);
  const [password, setPassword] = useState();

  const getPassword = async () => {
    const res = await fetch(
      `/api/passwordGenerator?length=${passwordLength}&hasNumber=${hasNumber}&hasSymbol=${hasSymbol}&hasLowercase=${hasLowercase}&hasUppercase=${hasUppercase}`
    );

    setPassword((await res.json()).password);
  };

  useEffect(() => {
    getPassword();
  }, [passwordLength, hasNumber, hasSymbol, hasLowercase, hasUppercase]);

  return (
    <>
      <div className="header">Password Generator</div>
      <div className="contentContainer">
        <div className="passwordDisplayContainer">
          <div className="passwordTextField">
            {password}
            <IconContext.Provider value={{ className: "icon" }}>
              <GrRefresh />
            </IconContext.Provider>
          </div>
          <div
            className="copyButton"
            onClick={() => navigator.clipboard.writeText(password!)}
          >
            COPY
          </div>
        </div>
        <div className="passwordOptionsContainer">
          <Slider
            valueLabelDisplay="auto"
            max={50}
            min={1}
            defaultValue={10}
            onChange={(_, value) => setPasswordLength(value as number)}
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
                  defaultChecked={true}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                  onChange={(_, checked) => setHasNumber(checked)}
                />
                Number
              </div>
              <div>
                <Checkbox
                  defaultChecked={true}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                  onChange={(_, checked) => setHasSymbol(checked)}
                />
                Symbol
              </div>
            </div>
            <div>
              <div>
                <Checkbox
                  defaultChecked={true}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                  onChange={(_, checked) => setHasLowercase(checked)}
                />
                Lowercase
              </div>
              <div>
                <Checkbox
                  defaultChecked={true}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                  onChange={(_, checked) => setHasUppercase(checked)}
                />
                Uppercase
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        Made by&nbsp;
        <a href="https://github.com/Murilo-Luciano" target="_blank">
          Murilo
        </a>
      </div>
    </>
  );
}
