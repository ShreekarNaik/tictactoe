"use client";

import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import GameInfo from "../components/GameInfo";
import DimensionSelector from "../components/DimensionSelector";
import "../styles/globals.css";

const Home = () => {
	const [dimension, setDimension] = useState(3); // default dimension is 3x3
	const [gameState, setGameState] = useState(
		Array.from({ length: dimension }, () => Array(dimension).fill(""))
	);
	console.log("Initialized : ", gameState);
	const [currentPlayer, setCurrentPlayer] = useState("X");

	useEffect(() => {
		setGameState(
			Array.from({ length: dimension }, () => Array(dimension).fill(""))
		);
	}, [dimension]);

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<DimensionSelector setDimension={setDimension} />
			<GameInfo
				dimension={dimension}
				currentPlayer={currentPlayer}
				gameState={gameState}
			/>
			<Game
				dimension={dimension}
				gameState={gameState}
				setGameState={setGameState}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
		</div>
	);
};

export default Home;
