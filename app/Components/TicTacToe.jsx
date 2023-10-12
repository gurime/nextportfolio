'use client'
import React, { useState } from 'react'

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
const [currentPlayer, setCurrentPlayer] = useState('X');
const [message, setMessage] = useState('');
const [gameOver, setGameOver] = useState(false); 

const handleCellClick = (index) => {
if (board[index] || gameOver) {
return;
}

const newBoard = [...board];
newBoard[index] = currentPlayer;
setBoard(newBoard);
checkForWinner(newBoard);
setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
};

const checkForWinner = (newBoard) => {
const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

for (let i = 0; i < lines.length; i++) {
const [a, b, c] = lines[i];
if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
setMessage(`Player ${newBoard[a]} wins!`);
setGameOver(true); 
return;
}
}

if (newBoard.every((cell) => cell !== null)) {
setMessage('It is a tie!');
setGameOver(true); 
}
};

const handleResetClick = () => {
setBoard(Array(9).fill(null));
setCurrentPlayer('X');
setMessage('');
setGameOver(false); 
};
return (
<>
<div id="tic-tac-toe">
{message && (
<p
style={{
color: '#fff',
textAlign: 'center',
fontSize: '24px',
}}>
{message}
</p>
)}

<table>
<tbody>
<tr>
<td
onClick={() => handleCellClick(0)}
className={!gameOver && !board[0] ? 'clickable' : ''}>
{board[0]}
</td>
<td
onClick={() => handleCellClick(1)}
className={!gameOver && !board[1] ? 'clickable' : ''}>
{board[1]}
</td>
<td
onClick={() => handleCellClick(2)}
className={!gameOver && !board[2] ? 'clickable' : ''}>
{board[2]}
</td>
</tr>

<tr>
<td
onClick={() => handleCellClick(3)}
className={!gameOver && !board[3] ? 'clickable' : ''}>
{board[3]}
</td>
<td
onClick={() => handleCellClick(4)}
className={!gameOver && !board[4] ? 'clickable' : ''}>
{board[4]}
</td>
<td
onClick={() => handleCellClick(5)}
className={!gameOver && !board[5] ? 'clickable' : ''}>
{board[5]}
</td>
</tr>

<tr>
<td
onClick={() => handleCellClick(6)}
className={!gameOver && !board[6] ? 'clickable' : ''}>
{board[6]}
</td>
<td
onClick={() => handleCellClick(7)}
className={!gameOver && !board[7] ? 'clickable' : ''}>
{board[7]}
</td>
<td
onClick={() => handleCellClick(8)}
className={!gameOver && !board[8] ? 'clickable' : ''}>
{board[8]}
</td>
</tr>
</tbody>
</table>
<button id="reset-button" onClick={handleResetClick}>
Reset
</button>
</div>
</>
)
}
