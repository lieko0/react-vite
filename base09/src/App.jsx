import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";

export default function App() {
    const [dices, setDices] = useState(() => generateAllNewDice()); // the anonymous function prevent the function from being called on every render
    
    const gameWon = dices.every(die => die.isHeld) &&
        dices.every(die => die.value === dices[0].value);
    
    function getRandomDieValue() {
        return Math.ceil(Math.random() * 6);
    }

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
                value: getRandomDieValue(),
                isHeld: false,
                id: nanoid(),
        }));
    }

    const arrayDie =  dices.map((die) => {
        let {id, value, isHeld} = die;
        return <Die 
            key={id}
            id={id}
            value={value}
            isHeld={isHeld}
            toggle={toggleHold}
        />;
    });

    function rowDice() {
        setDices(prevDices => prevDices.map(die => 
            die.isHeld ? 
            die : 
            {...die, value: getRandomDieValue()}
        )); 
    }

    function resetGame() {
        setDices(generateAllNewDice());
    }

    function toggleHold(id) {
        setDices((prevDices) => prevDices.map((die) => {
            if (die.id === id) {
                return {
                    ...die,
                    isHeld: !die.isHeld
            }
        }
        return die;
    }));
    }

    const newGameButtonRef = useRef(null)

    useEffect(() => {
        if (gameWon && newGameButtonRef.current) {
            newGameButtonRef.current.focus();
        }
    }, [gameWon]);

    const {width, height} = useWindowSize();
    
    return (
        <main>
            {gameWon && <Confetti width={width} height={height} />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations, You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
           <div className="main-dice-container">
                {arrayDie}
           </div>
            <button ref={newGameButtonRef} onClick={gameWon ? resetGame : rowDice} className="roll-button">
                {gameWon ? "New game" : "Roll"}
            </button>
        </main>
    );
}
