"use client";

import React from "react";
import styles from "../styles/GameInfo.module.css";
import { checkWinner, checkGameState } from "../utils/gameLogic";

const GameInfo = ({ dimension, currentPlayer, gameState }) => {
	const winner = checkGameState(gameState);
	return (
		<div className={styles.gameInfo}>
			<div className={styles.dimension}>
				Grid Size: {dimension}x{dimension}
			</div>
			{winner === "" ? (
				<div className={styles.turn}>Current Turn: {currentPlayer}</div>
			) : (
				<div className={styles.turn}>
					{winner === "T" ? "It's a Tie!" : "Winner : " + winner}
				</div>
			)}
		</div>
	);
};

export default GameInfo;
