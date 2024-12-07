"use client";

import React, { useState } from "react";
import Game from "../components/Game";
import GameInfo from "../components/GameInfo";
import DimensionSelector, { newContext } from "../components/DimensionSelector";
import "../styles/globals.css";

const Home = () => {
	const [ctx, setCtx] = useState(newContext(3));

	console.log("Initialized Context : ", ctx);

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<DimensionSelector setContext={setCtx} />
			<Game context={ctx} setContext={setCtx} />
			<GameInfo context={ctx} />
		</div>
	);
};

export default Home;
