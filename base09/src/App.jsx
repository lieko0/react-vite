import { useState, useEffect } from "react";
import Die from "./Die";
import {nanoid} from "nanoid";

export default function App() {
    const [dices, setDices] = useState(generateAllNewDice());

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
        setDices((prevDices) => prevDices.map((die) => {
            if (!die.isHeld) {
                die.value = getRandomDieValue();
            }
            return die;
        }
        )); 
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

    
    return (
        <main>
           <div className="main-dice-container">
                {arrayDie}
           </div>
            <button onClick={rowDice} className="roll-button">
                 Roll
            </button>
        </main>
    );
}
