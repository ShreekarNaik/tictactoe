"use client"; // This is a client-side component

import "./globals.css";
import { useState } from 'react';

function Cell({ value }: { value: string }) {
    function updateState() {
        if (state === "X") {
            setState("O");
        }
        else {
            setState("X");
        }
    }
    const [state, setState] = useState(value);
    return <button className="cell" onClick={updateState}>{state}</button>;
}

function Board({ dimension }: { dimension: number }): JSX.Element {
    
    const board: JSX.Element[] = [];
    for (let i = 0; i < dimension; i++) {
        const row = [];
        for (let j = 0; j < dimension; j++) {
            row.push(<Cell key={`${i}-${j}`} value={"  " + (i*dimension+j) + "  "} />);
        }
        board.push(<div className="board-row" key = {i}>{row}</div>);
    }


    return <div>{board}</div>;
}

export default function Game({ dimension = 3 }: { dimension?: number }): JSX.Element {
    return (
        <div className="game">
            <div className="game-board">
                <Board dimension={dimension} />
            </div>
            <div className="game-info">
                <div>{/* status */} Game info is displayed here</div>
                <div>Playing tic tac toe of size : {dimension}</div>
            </div>
        </div>
    );
}
