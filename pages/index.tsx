import React, { useEffect, useState } from "react";
import PasswordDisplay from "../components/passwordDisplay";
import PasswordOptions from "../components/passwordOptions";

export default function Home() {
  // const password = "145844sdadgfgae3434#$$aaaaaaaaaaaaaaaaaaaaa";
  const [password, setPassword] = useState();

  const generatePassword = async () => {
    const response = await fetch(
      "/api/passwordGenerator?length=20&hasUppercase=true&hasLowercase=true&hasNumber=true&hasSymbols=true"
    );
    const data = await response.json();

    setPassword(data.password);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            paddingBottom: "5px",
            width: "50%",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {/* <h1 style={{ backgroundColor: "green" }}>Password Generator</h1> */}
          Password Generator
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            marginBottom: "40px",
            // maxWidth: "480px",
          }}
        >
          <PasswordDisplay password={password || ""} />
          <PasswordOptions />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: "auto",
            padding: "40px",
            backgroundColor: "#ffffff",
            textAlign: "center",
            color: "black",
          }}
        >
          Made by <a href="https://github.com/Murilo-Luciano">Murilo Luciano</a>
        </div>
      </div>
    </>
  );
}
