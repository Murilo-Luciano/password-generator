import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import colors from "../styles/colors";
import {
  PasswordGeneratorContext,
  PasswordGeneratorDispatchContext,
} from "../store";
import { STRENGTH_LEVELS } from "./GeneratorSection";

const CHECK_LABELS = {
  hasNumber: "Number",
  hasSymbol: "Symbol",
  hasUppercase: "Uppercase",
  hasLowercase: "Lowercase",
};

export default (props: { initialState: boolean }) => {
  const context = useContext(PasswordGeneratorContext);
  const dispatch = useContext(PasswordGeneratorDispatchContext);

  const strengthLevel = STRENGTH_LEVELS[context.strength!];

  const updateOptions = (option: string, value: boolean | number) =>
    dispatch({
      type: "set_password_options",
      payload: { field: option, value },
    });

  return (
    <div className="password-options-container">
      <div>
        <PasswordLength
          onChange={(value: number) => updateOptions("length", value)}
        />

        <div className="password-options-check-container">
          {Object.entries(context.options)
            .filter(([key, _]) => key != "length")
            .map(([key, value], index) => {
              const label = CHECK_LABELS[key as keyof typeof CHECK_LABELS];

              return (
                <OptionCheckBox
                  key={index}
                  defaultValue={!!value}
                  optionLabel={label}
                  onClick={(value: boolean) => updateOptions(key, value)}
                />
              );
            })}
        </div>
      </div>
      {props.initialState ? null : (
        <InfoSection
          strengthLevel={strengthLevel}
          estimative={context.estimative!}
        />
      )}
    </div>
  );
};

const PasswordLength = ({
  onChange,
}: {
  onChange: (value: number) => void;
}) => {
  const [value, setValue] = useState(15);
  const maxValue = 30;
  const minValue = 1;

  useEffect(() => onChange(value), [value]);

  const handleChange = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  const calculateTrackColor = () => {
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    return `linear-gradient(to right, #FFD768 ${percentage}%, #263752 ${percentage}%)`;
  };

  return (
    <div className="password-length-container">
      Length
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChange}
        className="password-length-slider"
        style={{
          background: calculateTrackColor(),
        }}
      />
    </div>
  );
};

const OptionCheckBox = ({
  optionLabel,
  defaultValue,
  onClick,
}: {
  optionLabel: string;
  defaultValue: boolean;
  onClick: (value: boolean) => void;
}) => {
  return (
    <div className="password-options-check-box">
      <Checkbox defaultValue={defaultValue} onClick={onClick} />
      <div style={{ marginRight: 30 }}></div>
      {optionLabel}
    </div>
  );
};

const Checkbox = ({
  defaultValue,
  onClick,
}: {
  defaultValue: boolean;
  onClick: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    onClick(checked);
  }, [checked]);

  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setChecked(!checked)}
    >
      {checked ? (
        <>
          <rect x="0.5802" width="24.5496" height="24" rx="4" fill="#FFD768" />
          <path
            d="M12.014 15.8035C12.3627 15.8035 12.6262 15.6696 12.8048 15.4018L16.6667 9.58171C16.7309 9.48687 16.7783 9.39343 16.809 9.30138C16.8396 9.20654 16.855 9.11588 16.855 9.02941C16.855 8.78952 16.7713 8.59148 16.6039 8.43527C16.4394 8.27628 16.2357 8.19678 15.9931 8.19678C15.8257 8.19678 15.6834 8.23025 15.5663 8.2972C15.4519 8.36135 15.3431 8.47293 15.2399 8.63192L11.9972 13.724L10.3738 11.7784C10.1981 11.5747 9.97771 11.4729 9.71272 11.4729C9.46446 11.4729 9.25944 11.5524 9.09766 11.7114C8.93587 11.8704 8.85498 12.0699 8.85498 12.3097C8.85498 12.4185 8.87172 12.5217 8.90519 12.6194C8.94145 12.7142 9.007 12.8132 9.10184 12.9164L11.2567 15.4562C11.4547 15.6877 11.7071 15.8035 12.014 15.8035Z"
            fill="white"
          />
        </>
      ) : (
        <rect
          x="1.0802"
          y="0.5"
          width="23.5496"
          height="23"
          rx="3.5"
          stroke="#FFEEBE"
          strokeOpacity="0.14"
        />
      )}
    </svg>
  );
};

const InfoSection = (props: {
  strengthLevel: { color: string; interjection: string };
  estimative: string;
}) => {
  return (
    <div
      style={{
        border: `2px solid ${props.strengthLevel.color}`,
        borderColor: props.strengthLevel.color,
      }}
      className="password-info-container"
    >
      <p>
        <a
          style={{
            color: props.strengthLevel.color,
          }}
        >
          {props.strengthLevel.interjection}
        </a>{" "}
        It would take an estimated
      </p>
      <p
        style={{
          color: props.strengthLevel.color,
        }}
      >
        {props.estimative}
      </p>

      <p>for a hacker to crack your password</p>
    </div>
  );
};
