const board = document.getElementById("board");
const status = document.getElementById("status");
let boardState = Array(9).fill(null);
let currentPlayer = "X";
let gameEnded = false;

// Create the board
function createBoard() {
    board.innerHTML = "";
    boardState.forEach((cell, index) => {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = cell;
        div.addEventListener("click", () => makeMove(index));
        board.appendChild(div);
    });
}

// Handle move
async function makeMove(index) {
    if (!gameEnded && !boardState[index]) {
        boardState[index] = "X";
        createBoard();

        if (checkWinner()) {
            status.textContent = "You win!";
            gameEnded = true;
            return;
        } else if (!boardState.includes(null)) {
            status.textContent = "It's a tie!";
            gameEnded = true;
            return;
        }

        // AI move
const response = await fetch("http://127.0.0.1:5000/move", {  // Use 127.0.0.1 instead of localhost
    method: "POST",
    mode: "cors",  // Explicitly allow CORS
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ state: boardState.map(cell => cell === "X" ? 1 : cell === "O" ? -1 : 0) })
});


        const data = await response.json();
        const { i, j } = data;
        boardState[i * 3 + j] = "O";
        createBoard();

        if (checkWinner()) {
            status.textContent = "RL player wins!";
            gameEnded = true;
        } else if (!boardState.includes(null)) {
            status.textContent = "It's a tie!";
            gameEnded = true;
        } else {
            status.textContent = "Your turn";
        }
    }
}

// Check winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination =>
        combination.every(index => boardState[index] === currentPlayer)
    );
}

// Reset game
function resetGame() {
    boardState = Array(9).fill(null);
    currentPlayer = "X";
    gameEnded = false;
    status.textContent = "Your turn";
    createBoard();
}

resetGame();