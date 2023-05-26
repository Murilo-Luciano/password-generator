import colors from "../styles/colors";

export default (props: { strengthLevel: { color: string } }) => {
  return (
    <div
      style={{
        marginBottom: 97,
        display: "flex",
        flexDirection: "row",

        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 612,
          borderRadius: 32,
          backgroundColor: props.strengthLevel.color,
          color: colors.black,

          display: "flex",

          alignContent: "center",
          justifyContent: "space-between",

          paddingLeft: 47,
          paddingRight: 47,
          paddingBottom: 8,
          paddingTop: 8,

          fontWeight: 400,
          fontSize: 32,
        }}
      >
        {"928#!D]ws83&ZtSD&4S...."}
        <svg
          width="36"
          height="34"
          viewBox="0 0 36 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.2968 8.99567C24.2043 6.9415 21.3325 5.6665 18.1432 5.6665C11.7645 5.6665 6.61255 10.7382 6.61255 16.9998C6.61255 23.2615 11.7645 28.3332 18.1432 28.3332C23.526 28.3332 28.0142 24.7207 29.2985 19.8332H26.2968C25.1135 23.134 21.9097 25.4998 18.1432 25.4998C13.3664 25.4998 9.48438 21.689 9.48438 16.9998C9.48438 12.3107 13.3664 8.49984 18.1432 8.49984C20.5388 8.49984 22.6746 9.47734 24.2332 11.0215L19.5863 15.5832H29.6882V5.6665L26.2968 8.99567Z"
            fill="#323232"
          />
        </svg>
      </div>
      <div
        style={{
          height: 50,
          width: 183,
          borderRadius: 16,
          backgroundColor: colors.cardBackgroundLight,

          fontWeight: 400,
          fontSize: 32,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          marginLeft: 22,
        }}
      >
        COPY
      </div>
    </div>
  );
};
