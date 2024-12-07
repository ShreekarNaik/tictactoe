"use client";

import React from "react";
import styles from "../styles/GameInfo.module.css";
import { checkGameState } from "../utils/gameLogic";

const GameInfo = ({ context }) => {
	const winner = checkGameState(context.gameState);
	return (
		<div className={styles.gameInfo}>
			<div className={styles.dimension}>
				Grid Size: {context.dimension}x{context.dimension}
			</div>
			{winner === "" ? (
				<div className={styles.turn}>
					Current Turn: {context.currentPlayer}
				</div>
			) : (
				<div className={styles.turn}>
					{winner === "T" ? "It's a Tie!" : "Winner : " + winner}
				</div>
			)}
		</div>
	);
};

export default GameInfo;
