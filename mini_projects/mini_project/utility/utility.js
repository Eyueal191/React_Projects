import { generateARandomWord } from "../Api/words.js";

const compareWords = (word1, word2) => {
  return word1 === word2;
};

const reduceALanguage = (setLanguages, languages) => {
  if (languages.length === 0) return null;
  const lostLanguage = languages[0];
  setLanguages((prev) => prev.slice(1)); // remove first item immutably
  return lostLanguage;
};

const guessHandler = (e, setGuessedWord) => {
  setGuessedWord(e.target.value.trim());
};

const checkHandler = ({
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
}) => {
  const result = compareWords(randomWord, guessedWord);
  setIsMatch(result);

  if (result) {
    data.current.numberOfRightGuess++;
    data.current.checkCount = 0; // reset check count on right guess
    setCheckMessage("Right Guess.");
  } else {
    data.current.numberOfWrongGuess++;
    data.current.checkCount++;

    if (data.current.checkCount <= 3) {
      setCheckMessage("Wrong Guess. Try again!");
    } else {
      // Reduce language after 3 wrong attempts
      const lostLanguage = reduceALanguage(setLanguages, languages);
      setCheckMessage(
        lostLanguage
          ? `You lost ${lostLanguage}. Keep going!`
          : "No more languages to lose."
      );
      data.current.checkCount = 0; // reset after reducing language
    }
  }

  setGuessedWord("");
  if (inputRef.current) inputRef.current.value = "";
};

const saveGeneratedWords = (randomWord, generatedWords) => {
  generatedWords.push(randomWord);
};

const nextHandler = ({
  inputRef,
  setGuessedWord,
  setRandomWord,
  generatedWords,
  randomWord,
}) => {
  if (inputRef.current) inputRef.current.value = "";
  setGuessedWord("");
  saveGeneratedWords(randomWord, generatedWords);
  setRandomWord(generateARandomWord(generatedWords));
};

const gameResetHandler = ({
  setIsMatch,
  setGuessedWord,
  data,
  inputRef,
  setRandomWord,
  setLanguages,
  setCheckMessage,
}) => {
  setIsMatch(null);
  setGuessedWord("");
  data.current.numberOfRightGuess = 0;
  data.current.numberOfWrongGuess = 0;
  data.current.generatedWords = [];
  data.current.checkCount = 0;

  if (inputRef.current) inputRef.current.value = "";

  setLanguages([
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
  ]);

  setRandomWord(generateARandomWord([]));
  setCheckMessage("Start playing.");
};

export {
  compareWords,
  reduceALanguage,
  guessHandler,
  checkHandler,
  saveGeneratedWords,
  nextHandler,
  gameResetHandler,
};
