import { Context, Dispatch, createContext } from "react";

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

export function reducer(
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

export const initialState: PasswordGeneratorState = {
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
