
import { map, alph, pieces, posChecker, piecesNames } from "./config.js";

class Piece {
    constructor(color, name, startPos, targetPos) {
        this.color = color.toLowerCase();
        this.name = name.toLowerCase();
        this.startPos = startPos.toLowerCase();
        this.targetPos = targetPos.toLowerCase();
    }
    getColor() { 
        return this.color; 
    }

    setColor(color) { 
        this.color = color.toLowerCase();
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name.toLowerCase();
    }

    getStartPos() {
        return this.startPos;
    }

    setStartPos(startPos) {
        this.startPos = startPos.toLowerCase();
    }
    getTargetPos() {
        return this.targetPos;
    }

    setTargetPos(targetPos) {
        this.targetPos = targetPos.toLowerCase();
    }
    getPossibleMoves() {
        if (!posChecker(this.startPos) || !posChecker(this.targetPos) || typeof this.name !== "string" || !piecesNames.includes(this.name)) return -1;
        let possibleMoves = [];
        let posCoords = this.startPos.split('');
        switch (this.name.toLowerCase()) {
            case "pawn":
                    switch (this.color.toLowerCase()) {
                        case "black":
                            possibleMoves.push(posCoords[0] + (Number(posCoords[1]) - 1));
                            if (posCoords[1] == 7) {
                                possibleMoves.push(posCoords[0] + (Number(posCoords[1]) - 2));
                            }
                            break;
                        case "white":
                            possibleMoves.push(posCoords[0] + (Number(posCoords[1]) + 1));
                            if (posCoords[1] == 2) {
                                possibleMoves.push(posCoords[0] + (Number(posCoords[1]) + 2));
                            }
                            break;
                    }

                break;

            case "king":
                map.forEach((x, x_index) => (x.forEach((y, y_index) => {
                    if ((Math.abs(alph.indexOf(posCoords[0]) - y_index) == 1 || alph.indexOf(posCoords[0]) == y_index) && (Math.abs(Number(posCoords[1]) - 1 - x_index) == 1 || (Number(posCoords[1]) == x_index + 1))) {
                        possibleMoves.push(y);
                    }
                })));
                break;

            case "queen":
                map.forEach((x, x_index) => (x.forEach((y, y_index) => {
                    if ((Math.abs(alph.indexOf(posCoords[0]) - y_index) === Math.abs(Number(posCoords[1]) - 1 - x_index)) || (alph.indexOf(posCoords[0]) === y_index) || (Number(posCoords[1]) - 1 === x_index)) {
                        possibleMoves.push(y);
                    }
                })));
                break;

            case "rook":
                map.forEach((x, x_index) => (x.forEach((y, y_index) => {
                    if ((alph.indexOf(posCoords[0]) === y_index) || (Number(posCoords[1]) === x_index - 1)) {
                        possibleMoves.push(y);
                    }
                })));
                break;

            case "bishop":
                map.forEach((x, x_index) => (x.forEach((y, y_index) => {
                    if ((Math.abs(alph.indexOf(posCoords[0]) - y_index) === Math.abs(Number(posCoords[1]) - 1 - x_index))) {
                        possibleMoves.push(y);
                    }
                })));
                break;

            case "knight":
                map.forEach((x, x_index) => x.forEach((y, y_index) => {
                    if ((Math.abs(alph.indexOf(posCoords[0]) - y_index) == 2 && Math.abs(Number(posCoords[1]) - 1 - x_index) == 1) || (Math.abs(alph.indexOf(posCoords[0]) - y_index) == 1 && Math.abs(Number(posCoords[1]) - 1 - x_index) == 2)) {
                        possibleMoves.push(y);
                    }
                }));
                break;

        }

        return possibleMoves; 
    }

    validateTargetPos() {
        return this.getPossibleMoves().includes(this.targetPos);
    }
}

export default Piece;