import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoarComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell]);

  function handleSelect(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      cell.figure && setSelectedCell(cell);
    }
  }

  function highlightCells() {
    if (selectedCell) {
      board.highlightCells(selectedCell);
      updateBoard();
    }
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell, cellIndex) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              click={handleSelect}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoarComponent;
