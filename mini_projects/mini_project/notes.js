//the fundamental logic
/*
Mental Model before Coding.
1. Generate a randome word and save it as randomWord (state.)
2. Get the original word size and prompt user to guess the randomWord based on the size.
3. Grab the user guess and store it as guessedWord(state).
4. compare the guessedWord and the originalWord and save as isMatch (state).
5. functions list needed - guessHandler ---> tasked to grab the guess and save it to the guessedWordState.
                         - compareWords ---> taksed to compared the guessedWord and the a randome word.
                         - nextHandler ----> tasked to clear the input for guess and set a new randome word.
                         - checkHandler ----> tasked to compare the guessedWord and the randome word. save the resut to isMatch.
                         - resetHandler ----> tasked to reset everything every state to begin the game a gain when number of guess is 8.
                         - getArandomWord ---> tasked to take in the previous word save them in the generatedWords and generate a different randome word.
6. message variables     - guessMessage ---->       promt message to the user to guess the randome number. 
                         - gameEndMessage --->      message it'll include the how much language saved bassed on number of guess.
                         - numberOfGuessedMade ---> records of how much user so far guessed.
                         - numberOfWrongGuess  ---> records of the wrongGuess.
                         - numberOfrightGuess  ---> records of the rightGuess.
7. Interactivity Schema
Check-button:---> save the generatedWord ---> compareWords ---> saveIsmatch ---> if (IsMatch) become false ---> reduceAlanguage.


                         */
