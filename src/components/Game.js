"use client";

import React from "react";
import Cell from "./Cell";
import styles from "../styles/Game.module.css";
import { checkWinner } from "../utils/gameLogic"; // utility to check if there's a winner

const Game = ({ context, setContext }) => {
	console.log("Game Context : ", context);
	let gameState = context.gameState;
	const dimension = context.dimension;
	let currentPlayer = context.currentPlayer;

	const handleCellClick = (row, col) => {
		const newState = [...gameState];
		if (newState[row][col] === "") {
			newState[row][col] = currentPlayer;
			currentPlayer = currentPlayer === "X" ? "O" : "X";

			setContext({
				...context,
				gameState: newState,
				currentPlayer: currentPlayer,
			});
		}
	};

	const renderGrid = () => {
		return gameState.map((row, rowIndex) => (
			<div key={rowIndex} className={styles.row}>
				{row.map((cell, colIndex) => (
					<Cell
						key={`${rowIndex}-${colIndex}`}
						value={cell}
						onClick={() => handleCellClick(rowIndex, colIndex)}
						isCrossed={checkWinner(context)}
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
			<div className={styles.grid}>{renderGrid()}</div>
			{restartButton()}
		</div>
	);
};

export default Game;
