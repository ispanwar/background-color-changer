import { useState } from "react";
import "./App.css";
// import Btnbar from "./Btnbar";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-200 p-3 rounded-md">
            <button
              className="outline-none px-4 py-1 rounded-md text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-white bg-orange-600"
              onClick={() => setColor("#F57C00")}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-white bg-pink-400"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-black bg-slate-200"
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md text-white bg-slate-900"
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
      {/* <Btnbar /> */}
    </>
  );
}

export default App;
