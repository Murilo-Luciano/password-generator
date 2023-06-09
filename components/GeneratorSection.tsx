import { useEffect, useReducer } from "react";
import InitialButton from "./InitialButton";
import PasswordDisplayContainer from "./PasswordDisplayContainer";
import PasswordOptionsContainer from "./PasswordOptionsContainer";
import colors from "../styles/colors";
import {
  PasswordGeneratorContext,
  PasswordGeneratorDispatchContext,
  initialState,
  reducer,
} from "../store";

export const STRENGTH_LEVELS = {
  veryGood: {
    color: colors.veryGood,
    interjection: "Great job!",
  },
  strong: {
    color: colors.strong,
    interjection: "Well done!",
  },
  medium: {
    color: colors.medium,
    interjection: "Not bad!",
  },
  weak: {
    color: colors.weak,
    interjection: "Oops!",
  },
  veryWeak: {
    color: colors.veryWeak,
    interjection: "Uh oh!",
  },
};

// E se o strength que veio do back não existir aqui no front ? Setar um padrão

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPassword = async () => {
    try {
      const res = await fetch(
        `/api/passwordGeneratorV2?length=${state.options.length}&hasNumber=${state.options.hasNumber}&hasSymbol=${state.options.hasSymbol}&hasLowercase=${state.options.hasLowercase}&hasUppercase=${state.options.hasUppercase}`
      );

      if (!res || res.status == 400) {
        dispatch({ type: "set_error_handling", payload: {} });
      }

      const { password, estimative, strength } = await res.json();
      dispatch({
        type: "set_generated_password",
        payload: {
          password: password,
          estimative: estimative,
          strength: strength,
        },
      });
    } catch (error) {
      dispatch({ type: "set_error_handling", payload: {} });
    }
  };

  useEffect(() => {
    if (state.fetchPassword) {
      fetchPassword();
    }
  }, [state]);

  const isOnInitialState =
    !state.password ||
    !state.strength ||
    !state.estimative ||
    !state.clickedOnGenerate;

  return (
    <PasswordGeneratorContext.Provider value={state}>
      <PasswordGeneratorDispatchContext.Provider value={dispatch}>
        <div>
          {state.hasError ? (
            <h3 style={{ textAlign: "center" }}>
              Oops! An error ocurred. Try again
            </h3>
          ) : null}
          {isOnInitialState ? <InitialButton /> : <PasswordDisplayContainer />}

          <PasswordOptionsContainer initialState={isOnInitialState} />
        </div>
      </PasswordGeneratorDispatchContext.Provider>
    </PasswordGeneratorContext.Provider>
  );
};
