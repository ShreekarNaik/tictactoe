"use client";

import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import GameInfo from "../components/GameInfo";
import DimensionSelector from "../components/DimensionSelector";
import "../styles/globals.css";
import { checkWinner } from "../utils/gameLogic";

function newContext(dimension) {
	return {
		dimension: dimension,
		gameState: Array.from({ length: dimension }, () =>
			Array(dimension).fill("")
		),
		winner: "",
		currentPlayer: "X",

		// function to change the dimension Are these even necessary here?
		// changeDimension: (newDimension) => {
		// 	this.dimension = newDimension;
		// 	this.gameState = Array.from({ length: newDimension }, () =>
		// 		Array(newDimension).fill("")
		// 	);
		// 	this.winner = "";
		// 	this.currentPlayer = "X";
		// },

		// makeMove: (row, col) => {
		// 	const newState = [...this.gameState];
		// 	if (newState[row][col] === "") {
		// 		newState[row][col] = this.currentPlayer;
		// 		this.currentPlayer === "X"
		// 			? (this.currentPlayer = "O")
		// 			: (this.currentPlayer = "X");
		// 		this.gameState = newState;
		// 	}
		// },
	};
}

const Home = () => {
	const [ctx, setCtx] = useState(newContext(3));
	// const setProperty = (key, value) => {
	// 	setCtx((prevCtx) => ({
	// 		...prevCtx,
	// 		[key]: value,
	// 	}));
	// };

	console.log("Context : ", ctx);

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<DimensionSelector setContext={setCtx} />
			<GameInfo context={ctx} />
			<Game context={ctx} setContext={setCtx} />
		</div>
	);
};

export default Home;
