import { map, alph, posRegex, pieces, posChecker, piecesNames } from "./config.js";

class Board {

    constructor(container_id) {
        this.container_id = container_id;
        this.isBoardReady = false;
        this.isHighlighted = false;
    }

        drawBoard() {
            console.log("Board is ready!")
            let container = document.getElementById(this.container_id);
            let board = document.createElement('div');
            board.id = 'chessboard';
            container.appendChild(board);
            for(let i = map.length - 1; i >= 0; i--) {
                let labelR = document.createElement('div');
                labelR.style.fontSize = '28px';
                labelR.style.paddingLeft = '5px';
                labelR.textContent = `${i + 1}`;
                    for(let j = 0; j <= alph.length - 1; j++) {
                        let cell = document.createElement('div');
                        
                        cell.className = alph[j] + (i + 1); 
                        cell.style.backgroundColor = (i % 2 == 0 ^ j % 2 != 0) ? '#906a4d' : '#d4bfad';
                        board.appendChild(cell);
                        this.isBoardReady = true;
                    }
                    board.appendChild(labelR);
                }
            alph.forEach((x, index) => {
                let labelC = document.createElement('div');
                labelC.textContent = x;
                labelC.style.fontSize = '30px';
                labelC.style.textAlign = 'center';
                board.appendChild(labelC);
            })
        }
        removeBoard() {
            this.isBoardReady = false;
            let elem = document.getElementById('chessboard');
            if (!elem) return null;
            elem.parentNode.removeChild(elem);
            return 1;
        }
        refreshBoard() {
            this.removeBoard();
            this.drawBoard();
        }
    
    
    highlightMoves(moves) {
        if (this.isBoardReady && (moves !== null && moves !== -1)) {
            moves.forEach((move) => {
                let cell = document.getElementsByClassName(move)[0];
                let hMask = document.createElement('div');
                hMask.style.backgroundColor ='rgba(16, 217, 16, 0.4)';
                if (cell.lastChild) cell.lastChild.appendChild(hMask);
                else cell.appendChild(hMask);
                
            })
            this.isHighlighted = true;
        }
    }//${pieces[color][piecesNames.indexOf(name)]}

    drawPiece(pos, color, name) {
        let nPos = posChecker(pos);
        if (!nPos || !this.isBoardReady) return null;
        
        let cell = document.getElementsByClassName(nPos)[0];
        let piece = document.createElement('div');
        piece.style.background = `url(${pieces[color][piecesNames.indexOf(name)]})`;
        piece.style.backgroundSize = 'contain';
        if (cell.lastChild) cell.lastChild.appendChild(piece);
        else cell.appendChild(piece);
        return 1;
    }

}

export default Board;