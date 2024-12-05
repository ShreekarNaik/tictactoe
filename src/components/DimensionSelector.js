"use client";

import React from "react";
import styles from "../styles/DimensionSelector.module.css";

const DimensionSelector = ({ setDimension }) => {
	return (
		<div className={styles.dimensionSelector}>
			<label className={styles.label}>Select Grid Dimension:</label>
			<select
				className={styles.select}
				onChange={(e) => setDimension(parseInt(e.target.value))}
			>
				<option value={3}>3x3</option>
				<option value={4}>4x4</option>
				<option value={5}>5x5</option>
			</select>
		</div>
	);
};

export default DimensionSelector;
