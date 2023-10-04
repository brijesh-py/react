import { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("bg-black");
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <div className={`w-full h-screen duration-200 color ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor("bg-red-500")}
            className="outline-none py-1 px-2 bg-red-500 rounded-xl text-white"
          >
            Red
          </button>
          <button
            onClick={() => changeColor("bg-blue-500")}
            className="outline-none py-1 px-2 bg-blue-500 rounded-xl text-white"
          >
            Blue
          </button>
          <button
            onClick={() => changeColor("bg-green-500")}
            className="outline-none py-1 px-2 bg-green-500 rounded-xl text-white"
          >
            Green
          </button>
          <button
            onClick={() => changeColor("bg-yellow-500")}
            className="outline-none py-1 px-2 bg-yellow-500 rounded-xl text-white"
          >
            Yellow
          </button>
          <button
            onClick={() => changeColor("bg-cyan-500")}
            className="outline-none py-1 px-2 bg-cyan-500 rounded-xl text-white"
          >
            Cyan
          </button>
          <button
            onClick={() => changeColor("bg-black")}
            className="outline-none py-1 px-2 bg-black rounded-xl text-white"
          >
            Black
          </button>
          <button
            onClick={() => changeColor("bg-teal-500")}
            className="outline-none py-1 px-2 bg-teal-500 rounded-xl text-white"
          >
            Teal
          </button>
          <button
            onClick={() => changeColor("bg-gray-800")}
            className="outline-none py-1 px-2 bg-gray-800 rounded-xl text-white"
          >
            Gray
          </button>
          <button
            onClick={() => changeColor("bg-purple-600")}
            className="outline-none py-1 px-2 bg-purple-600 rounded-xl text-white"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}
export default BackgroundChanger;
