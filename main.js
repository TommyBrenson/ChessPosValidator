import Board from "./board.js";
import Piece from "./chess.js";


function main() {
    console.log("Document is ready!");
    let board = new Board("board-container");
    try {
        document.onload = board.drawBoard();
    }
    catch(e) {
        console.log("Board hasn't been initialized correctly!");
        console.trace();
    }
    
    document.getElementById("calculate").onclick = function() {
        let pieceName = document.getElementById("piece-name").value;
        let startPos = document.getElementById("piece-position").value;
        let targetPos = document.getElementById("piece-target-position").value;
        let piece = new Piece("white", pieceName, startPos, targetPos);
        document.getElementById("result").textContent = (!pieceName || !startPos || !targetPos) ? "Заполните все поля!" : (piece.getPossibleMoves() === -1) ? "Введенные данные некорректны!" : (targetPos == startPos) ? "Стартовая и целевая позиции не должны совпадать!" : (piece.validateTargetPos()) ? "Фигура может занять данную позицию." : "Фигура не может занять данную позицию.";
        
        document.getElementById("show-pos").onclick = function() {
            board.refreshBoard();
            board.highlightMoves(piece.getPossibleMoves());
            board.drawPiece(piece.getTargetPos(), piece.getColor(), "target");
            board.drawPiece(piece.getStartPos(), piece.getColor(), piece.getName());
    
        }    
    };
    
}

main();