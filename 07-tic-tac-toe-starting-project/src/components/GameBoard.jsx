
export default function GameBoard({ onClickSquare, board }) {    

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((cell, cellIndex) => <li key={cellIndex}>
                        <button onClick={() => onClickSquare(rowIndex, cellIndex)} disabled={cell}>
                            {cell}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}