import { useState, useEffect } from "react";

function PasswordGenerator() {
  // state
  const [length, setLength] = useState(8);
  const [numberCheck, setNumberCheck] = useState(false);
  const [symbolsCheck, setSymbolCheck] = useState(false);
  const [password, setPassword] = useState("");

  //   password generate function
  const passwordGeneratorFunc = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const sysmbols = "!@#$%^&*()_+=-|?~";
    let rowPassword = chars;
    numberCheck ? (rowPassword += numbers) : {};
    symbolsCheck ? (rowPassword += sysmbols) : {};
    let newPassword = "";
    for (let x = 0; x < length; x++) {
      newPassword +=
        rowPassword[Math.floor(Math.random() * rowPassword.length)];
    }
    setPassword(newPassword);
  };

  //   copy password function
  const copyPassword = () => {
    let tempElement = document.createElement("input");
    tempElement.value = password;
    document.body.appendChild(tempElement)
    tempElement.select()
    document.execCommand('copy')
    tempElement.remove()
  };

  return (
    <div className="p-5 w-full h-screen bg-gray-300">
      <h1 className="text-center text-4xl font-black">Password Generator</h1>
      <div
        className="my-10 bg-red-300 mx-auto p-8 shadow-lg border-neutral-950"
        style={{ width: "fit-content" }}
      >
        <div className="flex flex-wrap">
          <input
            value={password}
            readOnly
            type="text"
            className="aret-blue-500 focus:caret-indigo-500 p-2 outline-none"
          />
          <button
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyPassword}
            >
            Copy
          </button>
        </div>
        <div className=" mt-3">
          <div className="block">
            <input
              onChange={(e) => {
                setLength(e.target.value), passwordGeneratorFunc();
              }}
              type="range"
              max={20}
              min={8}
              className="aret-blue-500 focus:caret-indigo-500 me-2 outline-none  "
              id="length"
            />
            <label htmlFor="length">Length {length}</label>
          </div>
          <div className="block">
            <input
              onChange={(e) => {
                setNumberCheck(e.target.checked), passwordGeneratorFunc();
              }}
              type="checkbox"
              id="number"
              className="aret-blue-500 focus:caret-indigo-500 p-2 outline-none"
            />{" "}
            <label htmlFor="number">Number</label>
          </div>
          <div className="block">
            <input
              onChange={(e) => {
                setSymbolCheck(e.target.checked), passwordGeneratorFunc();
              }}
              type="checkbox"
              id="symbols"
              className="aret-blue-500 focus:caret-indigo-500 p-2 outline-none"
            />{" "}
            <label htmlFor="symbols">Symbols</label>
          </div>
          <button
            onClick={passwordGeneratorFunc}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
export default PasswordGenerator;
