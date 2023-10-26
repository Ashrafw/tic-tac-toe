import { useState } from "react";

import "./App.css";
import Confetti from "react-confetti";
import Board from "./components/Board";

function App() {
  const [boardSize, setBoardSize] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [winnerString, setWinnerString] = useState("");

  return (
    <div className=" w-screen h-screen flex flex-col items-center p-6">
      <h1 className=" text-4xl font-bold py-8">Tic Tac Toe</h1>
      {!gameOver && (
        <div>
          <button
            className=" min-w-[150px] text-lg px-10  m-2 py-2 rounded-md bg-sky-800"
            onClick={() => setGameOver(true)}
          >
            Start
          </button>
        </div>
      )}
      {winnerString.length > 3 && (
        <>
          <Confetti />{" "}
        </>
      )}
      {gameOver && (
        <Board
          boardSize={boardSize}
          winnerString={winnerString}
          setWinnerString={setWinnerString}
        />
      )}
    </div>
  );
}

export default App;
