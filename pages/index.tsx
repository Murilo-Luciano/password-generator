import PasswordDisplay from "../components/passwordDisplay";
import PasswordOptions from "../components/passwordOptions";

export default function Home() {
  const password = "145844sdadgfgae3434#$$aaaaaaaaaaaaaaaaaaaaa";

  return (
    <>
      <div style={{ borderBottom: "2px solid red", marginBottom: "20px" }}>
        <h1>Password Generator</h1>
      </div>
      {/**@todo: dont use a <input/>, use a div */}
      {/* <input type="text" value="" /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PasswordDisplay password={password} />
        <PasswordOptions />
      </div>

      <div>
        Made by <a href="https://github.com/Murilo-Luciano">Murilo Luciano</a>
      </div>
    </>
  );
}
