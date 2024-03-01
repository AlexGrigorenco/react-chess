import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import { v4 as uuidv4 } from 'uuid';

export class Cell {

    readonly x: number;
    readonly y: number;
    readonly color: Colors;

    figure: Figure | null;

    board: Board;
    available: Boolean;
    id: string;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = uuidv4();
    }
}