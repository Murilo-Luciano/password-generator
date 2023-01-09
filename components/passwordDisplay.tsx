const PasswordDisplay = (props: { password: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "480px",
          marginRight: "15px",
          padding: "5px",
          borderBottom: "2px solid red",
        }}
      >
        {/* <h3 style={{ backgroundColor: "blue" }}>145844sdadgfgae3434#$$</h3> */}
        {props.password}
        <button style={{ backgroundColor: "yellow" }}>refresh icon</button>
      </div>
      <button>Copy</button>
    </div>
  );
};

export default PasswordDisplay;
