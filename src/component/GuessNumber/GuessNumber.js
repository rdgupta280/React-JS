import React, { useState } from "react";
import './guessNumber.css';

const Guessnumber = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const luckyNumber = 8;

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = () => {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      alert("Please enter a valid number.");
    } else if (parsedGuess < luckyNumber) {
      alert("Too small! Try again.");
      setAttempts((prevAttempts) => prevAttempts + 1);
    } else if (parsedGuess > luckyNumber) {
      alert("Too big! Try again.");
      setAttempts((prevAttempts) => prevAttempts + 1);
    } else {
      alert(`Congratulations! You guessed the right number (${luckyNumber})!`);
      setAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  return (
    <div>
      <h1>Enter your Guess Lucky Number</h1>
      <p>Attempts: {attempts}</p>
      <input type="number" value={guess} onChange={handleGuessChange} />
      <button onClick={handleGuessSubmit}>Guess</button>
    </div>
  );
};

export default Guessnumber;