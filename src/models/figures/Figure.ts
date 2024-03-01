import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { v4 as uuidv4 } from 'uuid';

export enum FigureNames {
 FIGURE = 'фигура',
 KING = 'король',
 KNIGHT = 'конь',
 PAWN = 'пешка',
 QUEEN = 'королева',
 ROOK = 'ладья',
 BISHOP = 'слон',
}

export class Figure {
    color: Colors;
    logo: string | null;

    cell: Cell;
    name: FigureNames;
    id: string;

    constructor(color: Colors, cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = uuidv4();
    }
}