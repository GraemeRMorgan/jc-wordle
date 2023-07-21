import React from "react";

function GuessResults({guesses}) {
  const [guess, setGuess] = React.useState('');

  return (
    <div className="guess-results">
      {guesses.toString()}
    </div>

  );
}

export default GuessResults;
