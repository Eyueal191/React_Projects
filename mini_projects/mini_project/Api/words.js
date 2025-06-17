const words = ["cat", "frog", "plant", "coffee", "picture", "elephant", "sandwich", "basketball"];

const generateARandomWord = (usedWords) => {
  let unUsedWords = words.filter((word) => !usedWords.includes(word));
  let randomIndex = Math.floor(Math.random() * unUsedWords.length);
  let randomWord = unUsedWords[randomIndex];
  return randomWord;
};

export {generateARandomWord, words}
