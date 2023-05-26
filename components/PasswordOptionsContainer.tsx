import { useState } from "react";
import colors from "../styles/colors";

export default (props: {
  initialState: boolean;
  strengthLevel: {
    color: string;
    interjection: string;
  };
}) => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: 1030,
        backgroundColor: colors.cardBackground,
        borderRadius: 24,
        paddingTop: 73,
        paddingBottom: 68,
        paddingLeft: 211,
        paddingRight: 211,
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{}}>
        <PasswordLength />

        <div
          style={{
            margin: "0 auto",
            marginTop: 66,
            width: 560,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: 79,
          }}
        >
          <OptionCheckBox defaultValue={false} optionLabel="Number" />
          <OptionCheckBox defaultValue optionLabel="Lowercase" />
          <OptionCheckBox defaultValue optionLabel="Symbol" />
          <OptionCheckBox defaultValue={false} optionLabel="Uppercase" />
        </div>
      </div>
      {props.initialState ? null : (
        <div
          style={{
            width: 281,
            borderRadius: 16,
            backgroundColor: colors.cardBackgroundLight,
            border: `2px solid ${props.strengthLevel.color}`,

            borderColor: props.strengthLevel.color,
            textAlign: "center",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            marginLeft: 40,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            <a
              style={{
                color: props.strengthLevel.color,
                fontWeight: 600,
                fontSize: 24,
              }}
            >
              {props.strengthLevel.interjection}
            </a>{" "}
            It would take an estimated
          </p>
          <p
            style={{
              color: props.strengthLevel.color,
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            5 years
          </p>

          <p
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            for a hacker to crack your password
          </p>
        </div>
      )}
    </div>
  );
};

const PasswordLength = () => {
  const SliderRangeBar = () => {
    const [value, setValue] = useState(50);

    const handleChange = (e: any) => {
      setValue(e.target.value);
    };

    const calculateTrackColor = () => {
      const percentage = ((value - 0) / (100 - 0)) * 100;
      return `linear-gradient(to right, #FFD768 ${percentage}%, #263752 ${percentage}%)`;
    };

    return (
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
        style={{
          background: calculateTrackColor(),
          width: "100%",
          height: "8px",
          outline: "none",
          appearance: "none",
        }}
      />
    );
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: 608,
        fontWeight: 400,
        fontSize: 24,
        color: colors.white,
      }}
    >
      Length
      <SliderRangeBar />
    </div>
  );
};

const CheckboxTst = ({ defaultValue }: { defaultValue: boolean }) => {
  const [checked, setChecked] = useState(defaultValue);

  if (checked) {
    return (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setChecked(false)}
      >
        <rect x="0.5802" width="24.5496" height="24" rx="4" fill="#FFD768" />
        <path
          d="M12.014 15.8035C12.3627 15.8035 12.6262 15.6696 12.8048 15.4018L16.6667 9.58171C16.7309 9.48687 16.7783 9.39343 16.809 9.30138C16.8396 9.20654 16.855 9.11588 16.855 9.02941C16.855 8.78952 16.7713 8.59148 16.6039 8.43527C16.4394 8.27628 16.2357 8.19678 15.9931 8.19678C15.8257 8.19678 15.6834 8.23025 15.5663 8.2972C15.4519 8.36135 15.3431 8.47293 15.2399 8.63192L11.9972 13.724L10.3738 11.7784C10.1981 11.5747 9.97771 11.4729 9.71272 11.4729C9.46446 11.4729 9.25944 11.5524 9.09766 11.7114C8.93587 11.8704 8.85498 12.0699 8.85498 12.3097C8.85498 12.4185 8.87172 12.5217 8.90519 12.6194C8.94145 12.7142 9.007 12.8132 9.10184 12.9164L11.2567 15.4562C11.4547 15.6877 11.7071 15.8035 12.014 15.8035Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setChecked(true)}
    >
      <rect
        x="1.0802"
        y="0.5"
        width="23.5496"
        height="23"
        rx="3.5"
        stroke="#FFEEBE"
        stroke-opacity="0.14"
      />
    </svg>
  );
};

const OptionCheckBox = ({
  optionLabel,
  defaultValue,
}: {
  optionLabel: string;
  defaultValue: boolean;
}) => {
  return (
    <div
      style={{
        backgroundColor: colors.cardBackgroundLight,
        borderRadius: 16,
        width: 214,
        height: 24,
        paddingBottom: 6,
        paddingTop: 6,
        paddingRight: 18,
        paddingLeft: 18,
        display: "flex",
        alignItems: "center",
        fontWeight: 400,
        fontSize: 24,
        color: colors.white,
      }}
    >
      <CheckboxTst defaultValue={defaultValue} />
      <div style={{ marginRight: 30 }}></div>
      {optionLabel}
    </div>
  );
};
