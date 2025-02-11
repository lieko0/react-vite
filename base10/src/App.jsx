import { useState } from "react"
import { languages } from "./languages"

export default function AssemblyEnd() {
  const [currentWord, setCurrentWord] = useState("element")
  const [guessedLetters, setGuessedLetters] = useState([])

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
        <section className="game-status" style={{backgroundColor: "#10A95B"}}>
          <h1>You win!</h1>
          <p>Well done! 🎉</p>
        </section>
        <section className="languages-container">
            {languages.map((language, index) => (
              <span key={index} style={{backgroundColor: language.backgroundColor, color: language.color}}>
                {language.name}
              </span>
            ))}
        </section>
        <section className="word-container">
          {
            currentWord.split("").map((letter, index) => (
              <span 
                key={index}
                style={{
                  backgroundColor: "#323232",
                  color: "#F9F4DA"
                }}
              >{letter.toUpperCase()}</span>
            ))
          }

        </section>

        <section className="keyboard-container">
          {
            alphabet.map((letter, index) => (
              <button 
                onClick={() => handleGuess(letter)}
                key={index}
                style={{
                  backgroundColor: "#10A95B",
                }}
              >{letter.toUpperCase()}</button>
            ))
          }
        </section>

        <button className="new-game">
          New Game
        </button>

      </main>
  )
}
