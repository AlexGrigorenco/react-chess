import React, { FC, ReactNode } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}>

    {cell.figure as ReactNode}

  </div>;
};

export default CellComponent;
