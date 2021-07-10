import SudokuMatrix from './SudokuMatrix';

export const solveSudoku = (matrix: Number[][]): Number[][] => {
    
    for (let y = 0; y < matrix.length; y++) {  
        for (let x = 0; x < matrix[y].length; x++) {  
            if(matrix[y][x] === 0){
                //if the cell is not solved yet
                solve(matrix, x, y);
            } 
        }
    }

    return matrix;

}

export function solve(matrix : Number[][], x : number, y: number) {

    const val = matrix[x][y];
    const row = matrix[y];

    //run it
    for(let value = 1; value < 9; value++){
        matrix[y][x] = value;
        
        //does this break the row?

        
        
        isRowBroken(row);


        //does this break the column?


        //does this break the subgrid

    }

}

export function isRowBroken(row : Number[]){

    console.log(row);

    //remove all zeros from row
    let unZeroed = row.filter( value => {
        return value !== 0;
    });
    
    
    //are there still any dupes
    return new Set(unZeroed).size !== unZeroed.length

}




