import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const PasswordOptions = () => {
  const [passwordSize, setPasswordSize] = useState(10);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  return (
    <div>
      <Slider
        trackStyle={{ backgroundColor: "red" }}
        handleStyle={{ backgroundColor: "red", borderColor: "black" }}
        min={10}
        onChange={(value) => setPasswordSize(value as number)}
      />
      <label>
        <input
          type="checkbox"
          onChange={(event) => setHasUppercase(event.target.checked)}
        />
        Uppercase
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(event) => setHasLowercase(event.target.checked)}
        />
        Lowercase
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(event) => setHasNumbers(event.target.checked)}
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(event) => setHasSymbols(event.target.checked)}
        />
        Symbols
      </label>
    </div>
  );
};

export default PasswordOptions;
