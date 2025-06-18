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

function Player(name,marker) {
    return{name,marker}
}

const GameController=(function () {
    let players = [];
    let currentPlayerIndex;
    let gameActive;
    return {
        startGame(player1,player2){
            players=[player1,player2]
            Gameboard.clearBoard();
            gameActive=true;
            currentPlayerIndex=0;
        },
        playTurn(index){
            if(gameActive && Gameboard.getBoard()[index]===""){
                Gameboard.updateCell(index, players[currentPlayerIndex].marker);
                if(checkWin(players[currentPlayerIndex].marker)) {
                    gameActive=false;
                    console.log(`${players[currentPlayerIndex].name} wins!`);
                } else if(checkTie()) {
                    gameActive=false;
                    console.log("It is a tie")
                } else {
                    switchPlayer()
                }
            }
        },
        switchPlayer(){
            currentPlayerIndex=currentPlayerIndex===0 ? 1 :0 ;
        },
        checkWin(marker) {
            // Define all winning combinations (rows, columns, diagonals)
            let winningCombos = [
                [0, 1, 2],  // top row
                [3, 4, 5],  // middle row
                [6, 7, 8],  // bottom row
                [0, 3, 6],  // left column
                [1, 4, 7],  // middle column
                [2, 5, 8],  // right column
                [0, 4, 8],  // diagonal
                [2, 4, 6]   // other diagonal
            ];
        
            // Loop through each winning combination
            for (let i = 0; i < winningCombos.length; i++) {
                const [a, b, c] = winningCombos[i];
                const board = Gameboard.getBoard();
        
                // Check if all three spots in this combo match the marker
                if (board[a] === marker && board[b] === marker && board[c] === marker) {
                    return true;  // Player wins
                }
            }
        
            return false;  // No win found
        }
        ,
        checkTie(){
            const array = Gameboard.getBoard();
            return array.every(cell => cell !== "");
        }
    }
  })();