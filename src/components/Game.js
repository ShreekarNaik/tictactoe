"use client";

import React from "react";
import Cell from "./Cell";
import styles from "../styles/Game.module.css";
import { checkWinner } from "../utils/gameLogic"; // utility to check if there's a winner

const Game = ({
	dimension,
	gameState,
	setGameState,
	currentPlayer,
	setCurrentPlayer,
}) => {
	const handleCellClick = (row, col) => {
		const newState = [...gameState];
		if (newState[row][col] === "") {
			newState[row][col] = currentPlayer;
			currentPlayer === "X"
				? setCurrentPlayer("O")
				: setCurrentPlayer("X");
			setGameState(newState);
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
						isCrossed={checkWinner(
							gameState,
							rowIndex,
							colIndex,
							currentPlayer
						)}
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
					setGameState(
						Array.from({ length: dimension }, () =>
							Array(dimension).fill("")
						)
					)
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
