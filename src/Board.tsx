import React, {useState} from 'react';
import SudokuMatrix from './SudokuMatrix';
import {solveSudoku} from './SudokuSolver';


function Board(props: SudokuMatrix) {

    const [matrix] = useState(props.matrix);

    //algorthim logic
    
    solveSudoku(matrix);
    
    //rendering logic


    let renderCells = (cells: Array<Number>, rowIndex: number) => {
        return cells.map((c: Number, i) => {

            return (i <= 8) ? (
                <div className='cell' key={"cell-"+i+"-row-"+rowIndex}>{c}</div>
            ) : ''

        });
    }

    let renderRows = matrix.map((r, index) => {
        return (
            <div className='board-row' key={"row-"+index}>
                {renderCells(r, index)}
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