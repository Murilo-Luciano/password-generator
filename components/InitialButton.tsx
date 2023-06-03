import { useContext } from "react";
import { PasswordGeneratorDispatchContext } from "./GeneratorSection";

export default () => {
  const dispatch = useContext(PasswordGeneratorDispatchContext);

  return (
    <div
      className="initial-button"
      onClick={() => dispatch({ type: "set_fetch_password", payload: true })}
    >
      Generate Password
    </div>
  );
};
