import React, { useEffect, useState } from "react";

export default function Staging() {
  return (
    <div
      style={
        {
          // paddingTop: 80
          // paddingLeft: 205,
          // paddingRight: 205,
        }
      }
    >
      <style jsx global>{`
        :root {
          background: #101b30;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffd768;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffd768;
          cursor: pointer;
        }
      `}</style>

      <HeroSection />

      <InitialButton />

      <PasswordOptionsContainer />
    </div>
  );
}

const colors = {
  background: "#101B30",
  whiteBackground: "#D9D9D9",
  cardBackground: "#18253F",
  cardBackgroundLight: "#263752",
  yellow: "#FFD768",
  veryGood: "#44D2A7",
  strong: "#F5E445",
  medium: "#FFC94D",
  weak: "#FF9B5C",
  veryWeak: "#FF6565",
  black: "#000000",
  white: "#FFFFFF",
};

const PasswordOptionsContainer = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        // marginBottom: 145,
        width: 1030,
        // width: 900,
        // height: 418,
        backgroundColor: colors.cardBackground,
        borderRadius: 24,
        // paddingTop: 68,
        paddingTop: 73,
        paddingBottom: 68,
        // paddingBottom: 34,
        paddingLeft: 211,
        paddingRight: 211,
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={
          {
            // margin: "0 auto",
            // backgroundColor: "red",
          }
        }
      >
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
            // backgroundColor: "red",
          }}
        >
          <OptionCheckBox defaultValue={false} optionLabel="Number" />
          <OptionCheckBox defaultValue optionLabel="Lowercase" />
          <OptionCheckBox defaultValue optionLabel="Symbol" />
          <OptionCheckBox defaultValue={false} optionLabel="Uppercase" />
        </div>
      </div>
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
          // borderRadius: "4px",
        }}
      />
    );
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: 608,
        //   fontFamily: "Inter",
        //   fontStyle: "normal",
        fontWeight: 400,
        fontSize: 24,
        //   lineHeight: 29,
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
        // justifyContent: "space-between",
        //   fontFamily: "Inter",
        //   fontStyle: "normal",
        fontWeight: 400,
        fontSize: 24,
        //   lineHeight: 29,
        color: colors.white,
      }}
    >
      <CheckboxTst defaultValue={defaultValue} />
      <div style={{ marginRight: 30 }}></div>
      {optionLabel}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div style={{ margin: "0 auto", width: 887, marginBottom: 184 }}>
      <h1
        style={{
          //   fontFamily: "Inter",
          //   fontStyle: "normal",
          fontWeight: 800,
          fontSize: 52,
          //   lineHeight: 63,
          color: colors.yellow,
          // textAlign: "center",
        }}
      >
        Get Strong Passwords in Seconds
      </h1>
      <p
        style={{
          //   fontFamily: "Inter",
          //   fontStyle: "normal",
          fontWeight: 400,
          fontSize: 24,
          //   lineHeight: 29,
          color: colors.yellow,
        }}
      >
        Never struggle to come up with a strong password again
        <br />
        Our password generator takes the guesswork out of security
        <br />
        Generate your password now
      </p>
    </div>
  );
};

const InitialButton = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        backgroundColor: colors.veryWeak,
        borderRadius: 16,
        width: 337,
        paddingTop: 6,
        paddingBottom: 6,
        //   fontFamily: "Inter",
        //   fontStyle: "normal",
        fontWeight: 400,
        fontSize: 32,
        //   lineHeight: 39,
        /* identical to box height */

        textAlign: "center",
        marginBottom: 98,
      }}
    >
      Generate Password
    </div>
  );
};
