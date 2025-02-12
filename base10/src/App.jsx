import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"

export default function AssemblyEnd() {
  const [currentWord, setCurrentWord] = useState("element")
  const [guessedLetters, setGuessedLetters] = useState([])

  // derived from states
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = wrongGuessCount >= languages.length - 1 // assembly remains
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  
  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters(prev => [...prev, letter])
    }
  }

  return (
      <main>
        
        <header>
          <h1>Assembly: Endgame</h1>
          <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </header>

        <section 
          className={clsx("game-status", {"lost": isGameLost}, {"won": isGameWon})} 
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

        <section className="word-container">
          {
            currentWord.split("").map((letter, index) => (
              <span
                className="word-letter"
                key={index}
              >{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
            ))
          }

        </section>

        <section className="keyboard-container">
          {
            alphabet.map((letter, index) => (
              <button 
                className={
                  clsx("keyboard-button", 
                    {"guessed": guessedLetters.includes(letter)},
                    {"correct": currentWord.includes(letter)}
                  )
                }
                onClick={() => handleGuess(letter)}
                key={index}
              >{letter.toUpperCase()}</button>
            ))
          }
        </section>

        {
          isGameOver &&
          <button className="new-game">
            New Game
          </button>
        }

      </main>
  )
}
