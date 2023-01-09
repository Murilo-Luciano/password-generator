const PasswordOptions = () => {
  return (
    <div>
      {/* slider */}
      <label>
        <input type="checkbox" />
        Uppercase
      </label>
      <label>
        <input type="checkbox" />
        Lowercase
      </label>
      <label>
        <input type="checkbox" />
        Numbers
      </label>
      <label>
        <input type="checkbox" />
        Symbols
      </label>
    </div>
  );
};

export default PasswordOptions;
