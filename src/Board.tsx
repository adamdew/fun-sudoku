import React, {useState} from 'react';
import SudokuMatrix from './SudokuMatrix';
import solveSudoku from './SudokuSolver';


function Board(props: SudokuMatrix) {

    const [matrix] = useState(props.matrix);

    //algorthim logic

    solveSudoku(matrix);
    
    //rendering logic

    let renderCells = (cells: Array<Number>) => {
        return cells.map((c: Number, i) => {

            return (i <= 8) ? (
                <div className='cell'>{c}</div>
            ) : ''

        });
    }

    let renderRows = matrix.map(r => {
        return (
            <div className='board-row'>
                {renderCells(r)}
            </div>
        );
    });

    return (
        <div className='board'>
            {renderRows}
        </div>
    );


}


export default Board;