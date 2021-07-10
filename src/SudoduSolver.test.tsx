import { isRowBroken } from "./SudokuSolver";

test('Row is definately broken', () => {
   
    var randomRow = [2,2,2,1,2,3,0,2,0];    
    expect(isRowBroken(randomRow)).toBe(true);

})

test('Does value break row test with solvable row', () => {
   
    var randomRow = [1,0,3,4,5,6,7,8,9];
    expect(isRowBroken(randomRow)).toBe(false);

})

