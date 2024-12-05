export const checkWinner = (gameState, row, col, player) => {
	// Check row, column, and diagonals for a winning line
	const dimension = gameState.length;
	let rowCount = 0;
	let colCount = 0;
	let diagCount = 0;
	let antiDiagCount = 0;
	for (let i = 0; i < dimension; i++) {
		if (gameState[row][i] === player) rowCount++;
		if (gameState[i][col] === player) colCount++;
		if (gameState[i][i] === player) diagCount++;
		if (gameState[i][dimension - 1 - i] === player) antiDiagCount++;
	}

	// This should return true if a win is detected on the grid
	return (
		rowCount === dimension ||
		colCount === dimension ||
		diagCount === dimension ||
		antiDiagCount === dimension
	);
};

export const checkGameState = (gameState) => {
	var tie = true;
	for (let i = 0; i < gameState.length; i++) {
		for (let j = 0; j < gameState[i].length; j++) {
			if (
				checkWinner(gameState, i, j, gameState[i][j]) &&
				gameState[i][j] !== ""
			) {
				return gameState[i][j];
			} else if (gameState[i][j] === "") {
				tie = false;
			}
		}
	}
	if (tie) return "T";
	return "";
};
