import React, { useEffect, useRef, useState } from "react";

function Main({ PlayerBackground }) {
  const [upLoadedMusics, setUpLoadedMusics] = useState([]);
  const [toBePlayedUrl, setToBePlayedUrl] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [musicUrlList, setMuisicUrlList] = useState([]);

  const audio = useRef(null);

  // Consolidated file upload and drop handler function
  function handleFileChange(files) {
    const names = files.map((music) => music.name); // Grab the names of each file uploaded.
    const urls = files.map((music) => URL.createObjectURL(music)); // Create URLs for each music.
    setMuisicUrlList(urls); // Set the list of music URLs.

    const musics = urls.map((url, i) => [url, names[i]]); // Combine the URLs with the names.
    setUpLoadedMusics(musics); // Update the state with uploaded music.
  }

  // Handle file selection from upload
  function handleUploadChange(event) {
    const files = [...event.target.files]; // Convert FileList to an array
    handleFileChange(files);
  }

  // Handle files dropped in the drop zone
  function handleDrop(event) {
    event.preventDefault(); // Prevent default behavior (e.g., opening the file)
    const files = [...event.dataTransfer.files]; // Get the dropped files
    handleFileChange(files);
  }

  // Handle drag over to allow dropping
  function handleDragOver(event) {
    event.preventDefault(); // Allow the drop
  }

  // Generate the music list after the state has been updated
  const musicList = upLoadedMusics.map((music, i) => (
    <li
      key={i}
      className="w-full min-h-[70px] p-4 border-2 border-gray-300 rounded-lg text-lg text-gray-800 bg-gradient-to-r from-blue-50 to-white hover:bg-blue-100 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-between"
      onClick={() => {
        setToBePlayedUrl(music[0]);
        audio.current.load();
        audio.current.play();
      }}
    >
      <span className="truncate max-w-[80%]">{music[1]}</span>
      <i className="fa-solid fa-play ml-2 text-blue-500"></i>
    </li>
  ));

  // Forward and backward navigation
  function forward() {
    const currentUrlIndex = musicUrlList.indexOf(toBePlayedUrl);
    const nextUrl =
      currentUrlIndex + 1 < musicUrlList.length
        ? musicUrlList[currentUrlIndex + 1]
        : musicUrlList[0];
    setToBePlayedUrl(nextUrl);
    audio.current.load();
    audio.current.play();
  }

  function backward() {
    const currentUrlIndex = musicUrlList.indexOf(toBePlayedUrl);
    const prevUrl =
      currentUrlIndex - 1 >= 0
        ? musicUrlList[currentUrlIndex - 1]
        : musicUrlList[musicUrlList.length - 1];
    setToBePlayedUrl(prevUrl);
    audio.current.load();
    audio.current.play();
  }

  // Play or pause the audio
  function playController() {
    if (isPaused) {
      audio.current.play();
      setIsPaused(false);
    } else {
      audio.current.pause();
      setIsPaused(true);
    }
  }

  useEffect(() => {
    if (audio.current) {
      audio.current.load();
      audio.current.play();
    }
  }, [toBePlayedUrl]);

  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12 bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
          Real Music Player
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Upload Button */}
          <div className="flex-1">
            <label
              htmlFor="musicUpload"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Upload your music
            </label>
            <input
              type="file"
              id="musicUpload"
              accept="audio/*"
              multiple
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 transition-all"
              onChange={handleUploadChange}
            />
          </div>

          {/* Drop Zone */}
          <div
            className="flex-1"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <label
              htmlFor="dropZone"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Or drag & drop here
            </label>
            <div
              id="dropZone"
              className="w-full h-24 border-2 border-dashed border-blue-400 rounded-md flex items-center justify-center text-gray-500 bg-blue-50 hover:bg-blue-100 transition-all cursor-pointer"
            >
              Drop files here
            </div>
          </div>
        </div>

        {/* Content Panels */}
        {upLoadedMusics.length > 0 && (
          <div className="border-2 border-dashed border-gray-300 w-full h-[60vh] flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-gray-50">
            {/* Left panel content */}
            <div className="flex-1 h-full border border-gray-200 rounded-md bg-white shadow-lg p-4">
              <ul className="space-y-4">{musicList}</ul>
            </div>

            {/* Right panel content */}
            <div className="flex flex-col h-full border border-gray-200 rounded-md bg-white shadow-lg p-4">
              <img
                src={PlayerBackground}
                alt="player-background"
                className="h-[60%] mb-4 object-cover rounded-md"
              />

              {/* Improved Play Controls */}
              <div className="flex items-center justify-center space-x-6 my-4">
                <button
                  onClick={backward}
                  className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <i className="fa-solid fa-backward-step text-xl"></i>
                </button>
                <button
                  onClick={playController}
                  className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {isPaused ? (
                    <i className="fa-solid fa-play text-xl"></i>
                  ) : (
                    <i className="fa-solid fa-pause text-xl"></i>
                  )}
                </button>
                <button
                  onClick={forward}
                  className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <i className="fa-solid fa-forward-step text-xl"></i>
                </button>
              </div>

              {toBePlayedUrl && (
                <audio
                  controls
                  autoPlay
                  muted
                  className="self-end w-full bg-blue-100 rounded-md shadow-md border-2 border-blue-300 p-2"
                  ref={audio}
                >
                  <source src={toBePlayedUrl} type="audio/mpeg" />
                  <source src={toBePlayedUrl} type="audio/ogg" />
                  <source src={toBePlayedUrl} type="audio/wav" />
                  <source src={toBePlayedUrl} type="audio/flac" />
                  <source src={toBePlayedUrl} type="audio/mp4" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
