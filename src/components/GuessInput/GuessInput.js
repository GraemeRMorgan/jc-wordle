import React from "react";

function GuessInput({handleSubmitGuess}) {
  // Component Variables
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  // Functions
  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 charcters. ❤️");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form
      className="tentativeGuess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="tentativeGuess-input">Enter tentativeGuess:</label>
      <input
        required
        minLength={5}
        maxLength={5}  
        id="tentativeGuess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  )
}

export default GuessInput;
