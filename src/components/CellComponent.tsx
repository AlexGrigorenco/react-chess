import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean,
  click: (cell: Cell) => void,
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return <div className={["cell", cell.color, selected ? 'selected' : '', cell.available ? "available" : "",].join(" ")} onClick={() => click(cell)}>

    {cell.figure?.name && <img src={cell.figure.logo} alt={cell.figure.name} title={cell.figure.name} />}

  </div>;
};

export default CellComponent;
