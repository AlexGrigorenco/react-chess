import React, { useEffect, useState } from 'react';
import './App.scss'
import BoarComponent from './components/BoardComponent';
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(()=> {
    restart();
  }, [])

  function restart(){
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  return (
    <div id='app'>
      <BoarComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
