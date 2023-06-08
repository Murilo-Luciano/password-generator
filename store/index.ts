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
  clickedOnGenerate: boolean;
}

interface PasswordGeneratorAction {
  type: string;
  payload: any;
}

export function reducer(
  state: PasswordGeneratorState,
  action: PasswordGeneratorAction
): PasswordGeneratorState {
  switch (action.type) {
    case "set_generate_password":
      return {
        ...state,
        fetchPassword: action.payload,
        clickedOnGenerate: action.payload,
      };
    case "set_fetch_password":
      return { ...state, fetchPassword: action.payload };
    case "set_password_options":
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.field]: action.payload.value,
        },
        fetchPassword: true,
      };
    case "set_generated_password":
      return {
        ...state,
        password: action.payload.password,
        estimative: action.payload.estimative,
        strength: action.payload.strength,
        fetchPassword: false,
      };
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
    hasNumber: true,
    hasSymbol: false,
    hasUppercase: false,
    hasLowercase: true,
  },
  fetchPassword: false,
  clickedOnGenerate: false,
};

export const PasswordGeneratorContext: Context<PasswordGeneratorState> =
  createContext(initialState);
export const PasswordGeneratorDispatchContext: Context<
  Dispatch<PasswordGeneratorAction>
> = createContext(({}) => {
  return;
});
