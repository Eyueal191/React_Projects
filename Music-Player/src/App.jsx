import React from "react";
import logo from "./assets/logo.png"; // Adjust the path to your logo file
import Main from "./components/Main";
import PlayerBackground from "./assets/PlayerBackground.webp";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-center items-center">
        <img
          src={logo}
          alt="Play Logo"
          className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain transition-transform duration-300 hover:scale-105"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Main PlayerBackground={PlayerBackground} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-4 text-center text-sm">
        © {new Date().getFullYear()} Play Music — Contact: contact@playmusic.com
      </footer>
    </div>
  );
}

export default App;
