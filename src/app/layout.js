// app/layout.js (or layout.tsx if using TypeScript)
"use client";

import "../styles/globals.css"; // Global CSS if needed

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>Tic Tac Toe</title>
				{/* Add other meta tags or links to stylesheets here */}
			</head>
			<body>
				{children} {/* This will render your page content */}
			</body>
		</html>
	);
}
