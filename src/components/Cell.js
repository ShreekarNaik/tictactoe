"use client";

import React from "react";
import styles from "../styles/Cell.module.css";

const Cell = ({ value, onClick, isCrossed }) => {
	return (
		<div
			className={`${styles.cell} ${isCrossed ? styles.crossed : ""}`}
			onClick={onClick}
		>
			{value}
		</div>
	);
};

export default Cell;
