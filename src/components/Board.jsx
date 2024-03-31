// import React, { useState } from 'react'
// import { Square } from '../tic-tac-toe/Square'

// export const Board = () => {
//     const [state, setState] = useState(Array(9).fill(null));
//     const [isTurn, setIsturn] = useState(true);

//     const checkWinner = () => {
//         const winnerlogic = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
//         for (let logic of winnerlogic) {
//             const [a, b, c] = logic;
//             if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
//                 return state[a];
//             }
//         }
//         return null;
//     };

//     const isBoardFull = state.every((square) => square !== null);
//     const isWinner = checkWinner();

//     const handleclick = (index) => {
//         if (state[index] !== null || isWinner) {
//             return;
//         }
//         const copyState = [...state];
//         copyState[index] = isTurn ? "X" : "0";
//         setState(copyState);
//         setIsturn(!isTurn);
//     };
//     const Playagain = () => {
//         setState(Array(9).fill(null));
//     };

//     return (
//         <div className="board-container">
//             {isWinner ? (
//                 <>
//                     {isWinner} won the game
//                     <button onClick={Playagain}>Play again</button>
//                 </>
//             ) : isBoardFull ? (
//                 <>
//                     No one wins :) Please<button onClick={Playagain}>Play again</button>
//                 </>
//             ) : (
//                 <>
//                     <h4>Player {isTurn ? "X" : "0"} Turn</h4>
//                     <div className="board-row">
//                         <Square onClick={() => handleclick(0)} value={state[0]} />
//                         <Square onClick={() => handleclick(1)} value={state[1]} />
//                         <Square onClick={() => handleclick(2)} value={state[2]} />
//                     </div>
//                     <div className="board-row">
//                         <Square onClick={() => handleclick(3)} value={state[3]} />
//                         <Square onClick={() => handleclick(4)} value={state[4]} />
//                         <Square onClick={() => handleclick(5)} value={state[5]} />
//                     </div>
//                     <div className="board-row">
//                         <Square onClick={() => handleclick(6)} value={state[6]} />
//                         <Square onClick={() => handleclick(7)} value={state[7]} />
//                         <Square onClick={() => handleclick(8)} value={state[8]} />
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }
import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className=" bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;