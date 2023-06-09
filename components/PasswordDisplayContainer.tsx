import { useContext } from "react";
import {
  PasswordGeneratorContext,
  PasswordGeneratorDispatchContext,
} from "../store";
import { STRENGTH_LEVELS } from "./GeneratorSection";

const ReloadIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      width="36"
      height="34"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M26.2968 8.99567C24.2043 6.9415 21.3325 5.6665 18.1432 5.6665C11.7645 5.6665 6.61255 10.7382 6.61255 16.9998C6.61255 23.2615 11.7645 28.3332 18.1432 28.3332C23.526 28.3332 28.0142 24.7207 29.2985 19.8332H26.2968C25.1135 23.134 21.9097 25.4998 18.1432 25.4998C13.3664 25.4998 9.48438 21.689 9.48438 16.9998C9.48438 12.3107 13.3664 8.49984 18.1432 8.49984C20.5388 8.49984 22.6746 9.47734 24.2332 11.0215L19.5863 15.5832H29.6882V5.6665L26.2968 8.99567Z"
        fill="#323232"
      />
    </svg>
  );
};

export default function PasswordDisplayContainer() {
  const context = useContext(PasswordGeneratorContext);
  const dispatch = useContext(PasswordGeneratorDispatchContext);

  const password = context.password!;

  const displayPassword =
    password.length >= 20 ? password.slice(0, 20).concat("...") : password;

  return (
    <div className="password-display-container">
      <div
        className="password-display"
        style={{
          backgroundColor: STRENGTH_LEVELS[context.strength!].color,
        }}
      >
        {displayPassword}
        <ReloadIcon
          onClick={() =>
            dispatch({ type: "set_fetch_password", payload: true })
          }
        />
      </div>
      <div
        className="password-copy-button"
        onClick={() => navigator.clipboard.writeText(password)}
      >
        COPY
      </div>
    </div>
  );
}
