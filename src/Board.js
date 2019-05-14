import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.05
  }
  

  constructor(props) {
    super(props);
    this.state =  {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    const { nrows, ncols, chanceLightStartsOn } = this.props;
    board = Array.from(Array(nrows), () => {
      return Array.from(Array(ncols), el => {
        return el = Math.random() <= chanceLightStartsOn;
      })
    })
   
    return board;
  }
  

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it~!!!
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    
    // TODO: flip this cell and the cells around it
    flipCell(y,x);
    flipCell(y,x-1);
    flipCell(y,x+1);
    flipCell(y-1,x);
    flipCell(y+1,x);


    // win when every cell is turned off
    // TODO: determine is the game has been won
    let checkWin = board.every(row => row.every(cell => !cell))
    this.setState({board:board, hasWon:checkWin});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    let newBoard = [];
    newBoard = Array.from(Array(this.props.nrows), (row,i) => {
      return <tr key={i}>

        {Array.from(Array(this.props.ncols), (col, index) => {
          let coord = `${i}-${index}`;
          return <Cell 
          key={coord} 
          isLit={this.state.board[i][index]}
          flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        })}
      </tr>
    })
    
    return (
    <div className="Board">
    <h1 className="Board-heading">Lights Out</h1>
    <table className="Board-table">
      <tbody>
      {newBoard}
      </tbody>
    </table>
      </div>
    );
  }
}


export default Board;
