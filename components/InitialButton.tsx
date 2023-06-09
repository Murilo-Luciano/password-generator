import { useContext } from "react";
import { PasswordGeneratorDispatchContext } from "../store";

export default function InitialButton() {
  const dispatch = useContext(PasswordGeneratorDispatchContext);

  return (
    <div
      className="initial-button"
      onClick={() => dispatch({ type: "set_generate_password", payload: true })}
    >
      Generate Password
    </div>
  );
}
