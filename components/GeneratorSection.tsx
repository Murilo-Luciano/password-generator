import { Context, Dispatch, createContext, useReducer } from "react";
import InitialButton from "./InitialButton";
import PasswordDisplayContainer from "./PasswordDisplayContainer";
import PasswordOptionsContainer from "./PasswordOptionsContainer";
import colors from "../styles/colors";

interface PasswordGeneratorState {
  password?: string;
  strength?: "veryGood" | "strong" | "medium" | "weak" | "veryWeak";
  estimative?: string;
  options: {
    length: number;
    hasNumber: boolean;
    hasSymbol: boolean;
    hasLowercase: boolean;
    hasUppercase: boolean;
  };
  fetchPassword: boolean;
}

interface PasswordGeneratorAction {
  type: string;
  payload: any;
}

function reducer(
  state: PasswordGeneratorState,
  action: PasswordGeneratorAction
) {
  switch (action.type) {
    case "set_fetch_password":
      return { ...state, fetchPassword: action.payload };
    default:
      return state;
  }
}

const STRENGTH_LEVELS = {
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

const initialState: PasswordGeneratorState = {
  password: undefined,
  strength: undefined,
  estimative: undefined,
  options: {
    length: 15,
    hasNumber: false,
    hasSymbol: true,
    hasUppercase: false,
    hasLowercase: true,
  },
  fetchPassword: false,
};

export const PasswordGeneratorContext: Context<PasswordGeneratorState> =
  createContext(initialState);
export const PasswordGeneratorDispatchContext: Context<
  Dispatch<PasswordGeneratorAction>
> = createContext(({}) => {
  return;
});

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isOnInitialState =
    !state.password || !state.strength || !state.estimative;

  return (
    <PasswordGeneratorContext.Provider value={state}>
      <PasswordGeneratorDispatchContext.Provider value={dispatch}>
        <div>
          {isOnInitialState ? (
            <InitialButton />
          ) : (
            <PasswordDisplayContainer
              // strengthLevel={STRENGTH_LEVELS[state.strength!]}
              strengthLevel={STRENGTH_LEVELS["veryGood"]}
            />
          )}

          <PasswordOptionsContainer
            initialState={isOnInitialState}
            // strengthLevel={STRENGTH_LEVELS[state.strength!]}
            strengthLevel={STRENGTH_LEVELS["veryGood"]}
          />
        </div>
      </PasswordGeneratorDispatchContext.Provider>
    </PasswordGeneratorContext.Provider>
  );
};
