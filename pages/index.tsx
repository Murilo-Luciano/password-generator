import { Checkbox, Slider } from "@mui/material";
import Head from "next/head";
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

    if (passwordStrength == "veryWeak")
      return (
        <div className="strengthDescription strengthDescriptionVeryWeak">
          <div>
            <GrClear className="infoIcon" />
          </div>
          Very weak
        </div>
      );

    return (
      <div className="strengthDescription strengthDescriptionWeak">
        <div>
          <GrAlert className="infoIcon" />
        </div>
        Weak
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Passwords Generator</title>
        <meta name="description" content="Password generator" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon64.png" />
      </Head>
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
        <div>
          Use the options above to specify the desired length and characters
          when generating your random password.
          <br />
          <br />
          The selected options gives you{" "}
          <strong>
            {(passwordPossibilities as any as number)?.toString().includes("e+")
              ? passwordPossibilities
              : (passwordPossibilities as any as number)?.toLocaleString()}
          </strong>{" "}
          password possibilities.
        </div>
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
