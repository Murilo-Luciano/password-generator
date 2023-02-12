import { Checkbox, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  GrRefresh,
  GrStatusInfo,
  GrValidate,
  GrClear,
  GrAlert,
} from "react-icons/gr";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [hasNumber, setHasNumber] = useState(true);
  const [hasSymbol, setHasSymbol] = useState(true);
  const [hasLowercase, setHasLowercase] = useState(true);
  const [hasUppercase, setHasUppercase] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordPossibilities, setPasswordPossibilities] = useState();
  const [passwordStrength, setPasswordStrength] = useState("");

  const getPassword = async () => {
    const res = await (
      await fetch(
        `/api/passwordGenerator?length=${passwordLength}&hasNumber=${hasNumber}&hasSymbol=${hasSymbol}&hasLowercase=${hasLowercase}&hasUppercase=${hasUppercase}`
      )
    ).json();

    setPassword(res.password);
    setPasswordPossibilities(res.possibilities);
    setPasswordStrength(res.strength);
  };

  useEffect(() => {
    getPassword();
    setRefresh(false);
  }, [
    passwordLength,
    hasNumber,
    hasSymbol,
    hasLowercase,
    hasUppercase,
    refresh,
  ]);

  const StrengthDisplay = () => {
    if (passwordStrength == "veryStrong")
      return (
        <div className="strengthDescription strengthDescriptionVeryStrong">
          <div>
            <GrValidate className="infoIcon" />
          </div>
          Very Strong
        </div>
      );

    if (passwordStrength == "strong")
      return (
        <div className="strengthDescription strengthDescriptionStrong">
          <div>
            <GrValidate className="infoIcon" />
          </div>
          Strong
        </div>
      );

    if (passwordStrength == "weak")
      return (
        <div className="strengthDescription strengthDescriptionWeak">
          <div>
            <GrClear className="infoIcon" />
          </div>
          Very weak
        </div>
      );

    return (
      <div className="strengthDescription strengthDescriptionAverage">
        <div>
          <GrAlert className="infoIcon" />
        </div>
        Weak
      </div>
    );
  };

  return (
    <>
      <div className="header">Passwords Generator</div>
      <div className="contentContainer">
        <div className="passwordDisplayContainer">
          <div className="passwordTextField">
            {password}
            <IconContext.Provider value={{ className: "icon" }}>
              <GrRefresh onClick={() => setRefresh(true)} />
            </IconContext.Provider>
          </div>
          <div
            className="copyButton"
            onClick={() => navigator.clipboard.writeText(password!)}
          >
            COPY
          </div>
        </div>

        <StrengthDisplay />

        <div className="passwordOptionsContainer">
          Password Length
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
      <div className="description">
        <div>
          <GrStatusInfo className="infoIcon" />
        </div>
        Use the options above to specify the desired length and characters when
        generating your random password.
        <br />
        <br />
        Those options gives you{" "}
        {(passwordPossibilities as any as number)?.toString().includes("e+")
          ? passwordPossibilities
          : (passwordPossibilities as any as number)?.toLocaleString()}{" "}
        password possibilities.
      </div>
      <div className="footer">
        Made by&nbsp;
        <a
          href="https://github.com/Murilo-Luciano"
          target="_blank"
          rel="noreferrer"
        >
          Murilo
        </a>
      </div>
    </>
  );
}
