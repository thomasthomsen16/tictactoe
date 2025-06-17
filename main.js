const Gameboard = (function() {
    // This is the private stuff
    let board = ["","","","", "","","","", ""];
    return {
        // This is the public stuff
        getBoard() {
            return board;
        },
        updateCell(index,marker){
            board[index]=marker;  
        },
        clearBoard(){
            board = ["","","","", "","","","", ""];
        }
    };
})();