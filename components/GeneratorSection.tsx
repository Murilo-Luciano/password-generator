import { Context, Dispatch, createContext, useReducer } from "react";
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

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
