import React, { useState } from "react";
import Cell from "./Cell";

type BoardType = {
  boardSize: number;
  winnerString: string;
  setWinnerString: React.Dispatch<React.SetStateAction<string>>;
};

const Board = ({ boardSize, winnerString, setWinnerString }: BoardType) => {
  const [boardArray, setBoardArray] = useState(
    Array.from(Array(boardSize), () => new Array(boardSize).fill(""))
  );
  const [recentSelection, setRecentSelection] = useState("O");
  const handleRestart = () => {
    setWinnerString("");
    setBoardArray(Array.from(Array(boardSize), () => new Array(boardSize).fill("")));
  };
  return (
    <div className=" relative">
      <div
        className={
          winnerString.length > 3 ? " opacity-40 bg-rose-900 my-10" : " bg-rose-900 my-10"
        }
      >
        {boardArray.map((row, x) => (
          <div key={`row-${x}`} className="flex">
            {row.map((item, y) => (
              <Cell
                key={`col-${y}`}
                x={x}
                y={y}
                item={item}
                boardArray={boardArray}
                setBoardArray={setBoardArray}
                recentSelection={recentSelection}
                setRecentSelection={setRecentSelection}
                setWinnerString={setWinnerString}
              />
            ))}
          </div>
        ))}
      </div>
      {winnerString.length > 3 && (
        <>
          <div className=" absolute top-1/2 left-1/2  w-[500px] -translate-x-1/2 -translate-y-1/2 shadow-2xl  bg-rose-900 px-6 py-10 flex justify-center items-center rounded-lg text-3xl font-semibold">
            {winnerString}
          </div>
        </>
      )}
      <div className=" flex items-center justify-center">
        <button
          className=" min-w-[150px] text-lg px-10 py-2 m-2 rounded-md bg-rose-800 shadow shadow-slate-700"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Board;
