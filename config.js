export const posRegex = /^[A-h][1-8]$/;

export const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const map = Array(8).fill(alph).map((x, index) => x.map((y) => (y + (index + 1))));
export const piecesNames = ["pawn", "king", "queen", "rook", "bishop", "knight", "target"];
export const posChecker = (pos) => ((typeof pos != 'string' || !posRegex.test(pos)) ? null : pos);

export const pieces = {
    white: [
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png", // pawn
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png", // king
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png", // queen
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png", // rook
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png", // bishop
        "https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png",  // knight
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Roundel_of_Thailand.svg/1024px-Roundel_of_Thailand.svg.png" 
    ],
    // as above
    black: [
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Roundel_of_Thailand.svg/1024px-Roundel_of_Thailand.svg.png"
    ],
    
}

