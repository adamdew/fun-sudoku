import './App.css';
import React from 'react';
import Board from './Board';


const sudokuMatrix = [
  [0, 5, 1, 3, 6, 2, 7, 0, 0],
  [0, 4, 0, 0, 5, 8, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 2, 5],
  [0, 8, 0, 0, 0, 0, 9, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 5, 0, 0, 0, 0, 8, 0],
  [1, 2, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 2, 8, 0, 0, 6, 0],
  [0, 0, 8, 5, 3, 4, 2, 9, 0]
];


class App extends React.Component {
  render(){
   return (
    <div className="App">
     <h1>Fun Sudoku</h1> 
      <Board matrix={sudokuMatrix}/>
    </div>
  );
  } 
  }

export default App;
