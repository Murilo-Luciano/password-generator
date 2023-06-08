import { Context, Dispatch, createContext, useEffect, useReducer } from "react";
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

  useEffect(() => {
    if (state.fetchPassword) {
      // fetch

      dispatch({
        type: "set_generated_password",
        payload: {
          password: "TeStE1234!!@@##",
          estimative: "1M years",
          strength: "medium",
        },
      });
    }
  }, [state]);

  const isOnInitialState =
    !state.password || !state.strength || !state.estimative;

  return (
    <PasswordGeneratorContext.Provider value={state}>
      <PasswordGeneratorDispatchContext.Provider value={dispatch}>
        <div>
          {isOnInitialState ? <InitialButton /> : <PasswordDisplayContainer />}

          <PasswordOptionsContainer initialState={isOnInitialState} />
        </div>
      </PasswordGeneratorDispatchContext.Provider>
    </PasswordGeneratorContext.Provider>
  );
};
