import React, { useEffect, useRef, useState } from "react";

function Dice() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Initialize staticButtons with `false`
  const [staticButtons, setStaticButtons] = useState({
    btn1v: false,
    btn2v: false,
    btn3v: false,
    btn4v: false,
    btn5v: false,
    btn6v: false,
    btn7v: false,
    btn8v: false,
    btn9v: false,
    btn10v: false,
  });

  const buttonsRef = useRef({
    btn1v: null,
    btn2v: null,
    btn3v: null,
    btn4v: null,
    btn5v: null,
    btn6v: null,
    btn7v: null,
    btn8v: null,
    btn9v: null,
    btn10v: null,
  });

  const [rollTrigger, setRollTrigger] = useState(false);

  // Generate a fresh set of random values
  const dynamic = {
    btn1v: getRandomNumber(),
    btn2v: getRandomNumber(),
    btn3v: getRandomNumber(),
    btn4v: getRandomNumber(),
    btn5v: getRandomNumber(),
    btn6v: getRandomNumber(),
    btn7v: getRandomNumber(),
    btn8v: getRandomNumber(),
    btn9v: getRandomNumber(),
    btn10v: getRandomNumber(),
  };

  const [buttonValues, setButtonValues] = useState(dynamic);

  useEffect(() => {
    setButtonValues(dynamic);
  }, [rollTrigger]);

  return (
    <>
      <h1 className="text-xl text-center font-semibold mt-4 text-indigo-700">
        Congratulations! You have won the game.
      </h1>

      <div className="grid grid-cols-5 gap-6 p-8 border-4 border-indigo-300 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-100 to-white w-full max-w-6xl mx-auto mt-12">
        <button
          ref={(el) => {
            buttonsRef.current.btn1v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn1v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn1v: max }));
            buttonsRef.current.btn1v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn1v || buttonValues.btn1v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn2v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn2v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn2v: max }));
            buttonsRef.current.btn2v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn2v || buttonValues.btn2v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn3v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn3v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn3v: max }));
            buttonsRef.current.btn3v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn3v || buttonValues.btn3v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn4v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn4v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn4v: max }));
            buttonsRef.current.btn4v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn4v || buttonValues.btn4v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn5v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn5v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn5v: max }));
            buttonsRef.current.btn5v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn5v || buttonValues.btn5v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn6v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn6v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn6v: max }));
            buttonsRef.current.btn6v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn6v || buttonValues.btn6v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn7v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn7v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn7v: max }));
            buttonsRef.current.btn7v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn7v || buttonValues.btn7v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn8v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn8v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn8v: max }));
            buttonsRef.current.btn8v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn8v || buttonValues.btn8v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn9v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn9v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn9v: max }));
            buttonsRef.current.btn9v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn9v || buttonValues.btn9v}
        </button>

        <button
          ref={(el) => {
            buttonsRef.current.btn10v = el;
          }}
          className="w-24 h-24 flex items-center justify-center text-4xl font-semibold bg-white border-4 border-indigo-500 rounded-full shadow-lg text-indigo-800 hover:bg-indigo-100 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const max = buttonsRef.current.btn10v.textContent;
            setStaticButtons((prev) => ({ ...prev, btn10v: max }));
            buttonsRef.current.btn10v.style.backgroundColor = "green";
          }}
        >
          {staticButtons.btn10v || buttonValues.btn10v}
        </button>
        <button
          type="button"
          className="mt-6 px-10 py-4 bg-indigo-600 text-white text-lg font-semibold tracking-wide rounded-xl hover:bg-indigo-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 shadow-md col-span-5"
          onClick={() => setRollTrigger((prev) => !prev)}
        >
          🎲 Roll Dice {rollTrigger ? "rendered" : "not rendered"}
        </button>
      </div>
    </>
  );
}

export default Dice;
