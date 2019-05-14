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
    chanceLightStartsOn: .2
  }
  

  constructor(props) {
    super(props);
    this.state =  {
      haswon: false,
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
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    let newBoard = [];
    newBoard = Array.from(Array(this.props.nrows), (row,i) => {
      return <tr key={i}>
      
        {Array.from(Array(this.props.ncols), (col, index) => {
          return <Cell 
          key={`${i}-${index}`} 
          isLit={this.state.board[i][index]}/>
        })}
      </tr>
    })
    
    return (
    <table className="Board">
      <tbody>
      {newBoard}
      </tbody>
    </table>
    );
  }
}


export default Board;
