import React, { useEffect } from "react";

type CellType = {
  x: number;
  y: number;
  item: "";
  boardArray: string[][];
  setBoardArray: React.Dispatch<React.SetStateAction<string[][]>>;
  recentSelection: string;
  setRecentSelection: React.Dispatch<React.SetStateAction<string>>;
  setWinnerString: React.Dispatch<React.SetStateAction<string>>;
};

const Cell = ({
  x,
  y,
  item,
  boardArray,
  setBoardArray,
  recentSelection,
  setRecentSelection,
  setWinnerString,
}: CellType) => {
  const handleSelection = (x: number, y: number) => {
    const updatedBoard = [...boardArray];
    if (updatedBoard[x][y] === "") {
      if (recentSelection === "O") {
        updatedBoard[x][y] = "X";
        checkForWin(updatedBoard, "X");
        setRecentSelection("X");
      } else {
        updatedBoard[x][y] = "O";
        checkForWin(updatedBoard, "O");
        setRecentSelection("O");
      }
    }
    setBoardArray(updatedBoard);
  };
  const diagonalToRow = (board: string[][]) => {
    const newDiaBoard: string[][] = [[], []];
    let increment: number = 0;
    let decrement = board.length - 1;

    while (increment < board.length) {
      newDiaBoard[0].push(board[increment][increment]);
      newDiaBoard[1].push(board[decrement][increment]);
      increment++;
      decrement--;
    }
    return newDiaBoard;
  };
  const checkForWin = (board: string[][], currPlayer: string) => {
    // check rows for winner
    for (let row of board) {
      const rowSet = new Set(row);
      if (rowSet.size === 1 && !rowSet.has("")) {
        setWinnerString(`Congrats Player ${currPlayer} WINS!`);
      }
    }
    // check column for winner
    // transpose board, rows to columns
    const transposedBoard = ["", "", ""].map((_, colIndex) =>
      board.map((row) => row[colIndex])
    );
    for (let Col of transposedBoard) {
      const ColSet = new Set(Col);
      if (ColSet.size === 1 && !ColSet.has("")) {
        setWinnerString(`Congrats Player ${currPlayer} WINS!`);
      }
    }
    // check diagonal
    const diaArr = diagonalToRow(board);
    for (let rowDia of diaArr) {
      const rowDiaSet = new Set(rowDia);
      if (rowDiaSet.size === 1 && !rowDiaSet.has("")) {
        setWinnerString(`Congrats Player ${currPlayer} WINS!`);
      }
    }
  };

  return (
    <div
      className=" w-[150px] h-[150px] flex text-8xl font-extrabold justify-center items-center border border-gray-100"
      onClick={() => handleSelection(x, y)}
    >
      {item}
    </div>
  );
};

export default Cell;
