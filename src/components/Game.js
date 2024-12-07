"use client";

import React from "react";
import Cell from "./Cell";
import styles from "../styles/Game.module.css";
import { checkGameState } from "../utils/gameLogic"; // utility to check if there's a winner

const Game = ({ context, setContext }) => {
	// console.log("Game Context : ", context);
	let gameState = context.gameState;
	const dimension = context.dimension;
	let currentPlayer = context.currentPlayer;

	const handleCellClick = (row, col) => {
		if (context.winner !== "") return; // If there's a winner or tie, don't allow further moves

		const newState = [...gameState];
		if (newState[row][col] === "") {
			newState[row][col] = currentPlayer;
			currentPlayer = currentPlayer === "X" ? "O" : "X";
			let winner = checkGameState(newState);
			setContext({
				...context,
				gameState: newState,
				currentPlayer: currentPlayer,
				winner: winner,
			});
		}
	};

	// State sees the winner as a string, so we need to check if it's an empty string
	const renderGrid = () => {
		return gameState.map((row, rowIndex) => (
			<div key={rowIndex} className={styles.row}>
				{row.map((cell, colIndex) => (
					<Cell
						key={`${rowIndex}-${colIndex}`}
						value={cell}
						onClick={() => handleCellClick(rowIndex, colIndex)}
						isCrossed={checkGameState(context.gameState)}
					/>
				))}
			</div>
		));
	};

	const restartButton = () => {
		return (
			<button
				className={styles.restart}
				onClick={() =>
					setContext({
						...context,
						gameState: Array.from({ length: dimension }, () =>
							Array(dimension).fill("")
						),
						winner: "",
						currentPlayer: "X",
					})
				}
			>
				Restart Game
			</button>
		);
	};

	return (
		<div className={styles.game}>
			{/* Render grid if the game is playable i.e. the winner is '' else render grid with the winner */}
			<div className={styles.grid}>{renderGrid()}</div>
			{context.winner !== "" ? (
				<div className={styles.gameover}>Game Over</div>
			) : null}
			{restartButton()}
		</div>
	);
};

export default Game;
