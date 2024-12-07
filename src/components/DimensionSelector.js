"use client";

import React, { useState } from "react";
import styles from "../styles/DimensionSelector.module.css";

const DimensionSelector = ({ setContext }) => {
	const [customDimension, setCustomDimension] = useState("");
	const [selectedDimension, setSelectedDimension] = useState(3);

	function setDimension(dimension) {
		if (dimension < 3 || dimension > 10) {
			alert("Please enter a dimension between 3 and 10.");
			return;
		}
		setContext((prevCtx) => ({
			...prevCtx,
			dimension: dimension,
			gameState: Array.from({ length: dimension }, () =>
				Array(dimension).fill("")
			),
			winner: "",
			currentPlayer: "X",
		}));
	}

	function handleDimensionChange(e) {
		const value = parseInt(e.target.value);
		setSelectedDimension(value);
		if (value !== -1) {
			setDimension(value);
		}
	}

	function handleCustomDimensionSubmit(e) {
		e.preventDefault();
		const dimension = parseInt(customDimension);
		if (isNaN(dimension) || dimension < 3 || dimension > 9) {
			alert("Please enter a valid dimension between 3 and 9.");
			return;
		}
		setDimension(dimension);
	}

	return (
		<div className={styles.dimensionSelector}>
			<label className={styles.label}>Select Grid Dimension:</label>
			<select
				className={styles.select}
				value={selectedDimension}
				onChange={handleDimensionChange}
			>
				<option value={3}>3x3</option>
				<option value={4}>4x4</option>
				<option value={5}>5x5</option>
				<option value={-1}>Custom</option>
			</select>

			{selectedDimension === -1 && (
				<form
					onSubmit={handleCustomDimensionSubmit}
					className={styles.customDimensionForm}
				>
					<label className={styles.customLabel}>
						Enter Custom Dimension (3-10):
					</label>
					<input
						type="number"
						min={3}
						max={10}
						className={styles.customInput}
						value={customDimension}
						onChange={(e) => setCustomDimension(e.target.value)}
					/>
					<button type="submit" className={styles.customButton}>
						Set Dimension
					</button>
				</form>
			)}
		</div>
	);
};

export default DimensionSelector;
