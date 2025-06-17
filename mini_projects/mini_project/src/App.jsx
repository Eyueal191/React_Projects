import { useState, useRef } from "react";
import { toWords } from "number-to-words";
import Header from "../components/Header.jsx";
import { generateARandomWord } from "../Api/words.js";
import {
  compareWords,
  reduceALanguage,
  guessHandler,
  checkHandler,
  saveGeneratedWords,
  nextHandler,
  gameResetHandler,
} from "../utility/utility.js";

function App() {
  const inputRef = useRef(null);
  const initialLanguages = [
    "Html",
    "Css",
    "React",
    "JavaScript",
    "TypeScript",
    "NextJs",
    "NodeJs",
    "ExpressJS",
    "Pythone",
    "Assymbly",
  ];

  const data = useRef({
    numberOfRightGuess: 0,
    numberOfWrongGuess: 0,
    totalGuessMade() {
      return this.numberOfRightGuess + this.numberOfWrongGuess;
    },
    generatedWords: [],
    checkCount: 0,
  });

  const [languages, setLanguages] = useState(initialLanguages);
  const [randomWord, setRandomWord] = useState(generateARandomWord([]));
  const [guessedWord, setGuessedWord] = useState("");
  const [isMatch, setIsMatch] = useState(null);
  const [checkMessage, setCheckMessage] = useState("Start playing.");

  const randomWordSize = randomWord.length;

  const guessMessage = `Guess a word with ${toWords(randomWordSize)} letters.`;

  const gameEndMessage =
    data.current.numberOfRightGuess === 8
      ? "Well done, you have saved all the programming languages."
      : `You have managed to save ${data.current.numberOfRightGuess} languages and lost ${data.current.numberOfWrongGuess}.`;

  return (
    <>
      <Header languages={languages} />
      <main className="max-w-xl mx-auto px-6 py-10 mt-10 bg-white shadow-2xl rounded-3xl border border-gray-200 space-y-10">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Word Guessing Game
          </h2>
          {data.current.totalGuessMade() >= 8 ? (
            <p className="text-base text-gray-500 italic">{gameEndMessage}</p>
          ) : (
            <p className="text-lg text-blue-700 font-medium">{guessMessage}</p>
          )}
        </section>

        {checkMessage && (
          <h1
            className={`text-2xl font-semibold text-center ${
              isMatch ? "text-green-600" : "text-red-500"
            }`}
          >
            {checkMessage}
          </h1>
        )}

        <section>
          <input
            type="text"
            ref={inputRef}
            maxLength={randomWordSize}
            onChange={(e) => guessHandler(e, setGuessedWord)}
            placeholder="Type your guess..."
            className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </section>

        <section className="flex justify-center flex-wrap gap-4 pt-4">
          <button
            className="bg-blue-500 text-white rounded-full px-6 py-3 font-medium shadow-md"
            disabled={data.current.totalGuessMade() >= 8}
            onClick={() =>
              checkHandler({
                randomWord,
                guessedWord,
                inputRef,
                data,
                setIsMatch,
                setCheckMessage,
                setGuessedWord,
                setLanguages,
                languages,
                reduceALanguage,
              })
            }
          >
            Check
          </button>

          <button
            className="bg-green-500 text-white rounded-full px-6 py-3 font-medium shadow-md"
            disabled={data.current.totalGuessMade() >= 8}
            onClick={() =>
              nextHandler({
                inputRef,
                setGuessedWord,
                setRandomWord,
                generatedWords: data.current.generatedWords,
                randomWord,
              })
            }
          >
            Next
          </button>

          <button
            className="bg-red-500 text-white rounded-full px-6 py-3 font-medium shadow-md"
            onClick={() =>
              gameResetHandler({
                setIsMatch,
                setGuessedWord,
                data,
                inputRef,
                setRandomWord,
                setLanguages,
                setCheckMessage,
              })
            }
          >
            Reset
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
