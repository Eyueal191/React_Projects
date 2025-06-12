import { useRef } from "react";
import Child from "../components/Child";

function App() {
  const max = useRef(null); // ✅ Create the ref

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-300 p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">The UseRef</h1>
      </header>

      {/* ✅ Use correct capitalization for components (Child, not child) and pass ref properly */}
      <Child
        ref={max}
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex space-x-4">
        <button
          onClick={() => {
            max.current.getfocus();
          }}
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Focus
        </button>

        <button
          onClick={() => {
            max.current.getblur();
          }}
          className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Blur
        </button>
      </div>
    </div>
  );
}

export default App;
