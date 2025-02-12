import { useState } from "react"
import { clsx } from "clsx"
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";
import { languages } from "./languages"
import { getFarewellText } from "./utils"
import { words } from "./words"

export default function AssemblyEnd() {
  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState([])

  // derived from states
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = wrongGuessCount >= languages.length - 1 // assembly remains
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon

  const lastGuessedLetter = guessedLetters.length > 0 ? guessedLetters[guessedLetters.length - 1] : "";

  const lastGuessedLetterIsWrong = !currentWord.includes(lastGuessedLetter);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  
  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters(prev => [...prev, letter])
    }
  }

  function handleNewGame() {
    setCurrentWord(words[Math.floor(Math.random() * words.length)])
    setGuessedLetters([])
  }

  const {width, height} = useWindowSize();
    
  return (
      <main>
        
        {isGameWon && <Confetti width={width} height={height} />}
        
        <header>
          <h1>Assembly: Endgame</h1>
          <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </header>

        <section 
          role="status"
          aria-live="polite"
          className={clsx("game-status", {"lost": isGameLost}, {"won": isGameWon}, {"wrong": lastGuessedLetterIsWrong && !isGameLost})} 
        >
        {
          isGameLost ? 
          <>
            <h1>Game Over!</h1>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
          : isGameWon ? 
          <>
            <h1>You win!</h1>
            <p>Well done! 🎉</p>
          </>
          : lastGuessedLetterIsWrong ?
          <p>
         
              "{
              getFarewellText(languages.slice(0, wrongGuessCount).map(language => language.name).join(" & "))
              }"
          </p> 
          :
            null
          }
        </section>

        <section className="languages-container">
            {languages.map((language, index) => (
              <span 
                key={language.name} 
                style={{backgroundColor: language.backgroundColor, color: language.color}}
                className={clsx("language-letter", {"die": index < wrongGuessCount})}
              >
                {language.name}
              </span>
            ))}
        </section>

        <section 
          className="word-container"
        >
          {
            currentWord.split("").map((letter, index) => (
              <span
                className="word-letter"
                key={index}
              >
                {
                guessedLetters.includes(letter) ?
                  letter.toUpperCase() 
                : isGameOver ?
                  <u style={{color: "#EC5D49"}}>
                    {letter.toUpperCase()}
                  </u>
                :
                ""}
              
              </span>
            ))
          }

        </section>

        <section 
          className="sr-only"
          aria-live="polite"
          role="status"
        >
          <p>
            {
              
              isGameLost ?
                "Game Over! You lose! Better start learning Assembly 😭"
              : isGameWon ?
                "You win! Well done! 🎉"
              : lastGuessedLetter === "" ?
                "Start guessing!"
              : currentWord.includes(lastGuessedLetter) ?
                `Good guess! The letter ${lastGuessedLetter.toUpperCase()} is in the word!`
              : lastGuessedLetterIsWrong ?
              `Sorry, the letter ${lastGuessedLetter.toUpperCase()} is not in the word.`
              : ""
            } 
            {!isGameOver && `You have ${languages.length - wrongGuessCount - 1} attempts left.`}
          </p>
          <p>Current word: {currentWord.split("").map(
            letter => guessedLetters.includes(letter) ? letter + "." : "blank."
          ).join(" ")
          }</p>
          {isGameOver && 
          <p>{`Press the button below to start a new game. The answer is ${currentWord}`}</p>
          }

        </section>

        <section className="keyboard-container">
          {
            alphabet.map((letter, index) => (
              <button 
                className={
                  clsx("keyboard-button", 
                    {"guessed": guessedLetters.includes(letter)},
                    {"correct": currentWord.includes(letter)},
                  )
                }
                onClick={() => handleGuess(letter)}
                key={index}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter) || isGameOver}
                aria-label={`Letter ${letter}`}
              >{letter.toUpperCase()}</button>
            ))
          }
        </section>

        {
          isGameOver &&
          <button 
            className="new-game"
            onClick={handleNewGame}
          >
            New Game
          </button>
        }

      </main>
  )
}
