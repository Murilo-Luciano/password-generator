export default function Home() {
  return (
    <>
      <h1>Password Generator</h1>
      {/**@todo: dont use a <input/>, use a div */}
      <input type="text" value="" />
      {/* refresh button */}
      <button>Copy</button>
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

      <div>
        Made by <a href="https://github.com/Murilo-Luciano">Murilo Luciano</a>
      </div>
    </>
  );
}
