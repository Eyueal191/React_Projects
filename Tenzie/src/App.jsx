import React, { useState } from "react";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Tenzie Game 🎲</h1>
      <Dice />
    </div>
  );
}

export default App;
