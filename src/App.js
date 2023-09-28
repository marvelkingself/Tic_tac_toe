import React, { useEffect, useState } from 'react';
import './App.css';
import Squre from './components/Squre';


const initialState = ["", "", "", "", "", "", "", "", ""]


function App() {
  const [gameState, setGameState] = useState(initialState);
  const [steps, setsteps] = useState(0)
  const [winner, setWinner] = useState(null)
 
  
  


  useEffect(() => {
    checkWinner(gameState)
  }, [gameState])

  const onClickhandler = (event) => {
    const copyOfGameState = [...gameState]
    if (!event.target.innerText) {
      copyOfGameState[event.target.id] = steps % 2 === 0 ? 'X' : 'O';
      setsteps(steps + 1)
      setGameState(copyOfGameState)
    }

  }
  const resetGame = () => {
    setsteps(0)
    setGameState(initialState)
    setWinner(null)
  }
  const checkWinner = (gameState) => {
    const winningCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winningCondition.forEach(condition => {
      const [a, b, c] = condition;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        setWinner(gameState[a])
         
        
      }
    })
  }
  if(winner==='X'){
  if (localStorage.X) {
    
    localStorage.X = Number(localStorage.X)+1;
  } else {
    localStorage.X = 1;
  }}
  if(winner==='O'){
    if (localStorage.O) {
      
      localStorage.O = Number(localStorage.O)+1;
    } else {
      localStorage.O = 1;
    }}

  

  return (
    <div className="container">
    <div className='head'>
      <h1 className='playerx' >PlayerX=> {localStorage.X} </h1>
      <h1 className='playero'>PlayerY=> {localStorage.O}</h1>
    </div>
      <div className='main'>
      
      {(!winner&&steps<9)&&
      (<div className='right-wrap'>
        <div className='players'>
          <div className={`player ${steps % 2 === 0 && 'playerx'}`}>Player X</div>
          <div className={`player ${steps % 2 === 1 && 'playero'}`}>Player O</div>
        </div>
        <div className='game-wrap' onClick={onClickhandler}>
          <Squre id={0} state={gameState[0]} className='border-right-bottom' />
          <Squre id={1} state={gameState[1]} className='border-right-bottom' />
          <Squre id={2} state={gameState[2]} className='border-bottom' />
          <Squre id={3} state={gameState[3]} className='border-right-bottom' />
          <Squre id={4} state={gameState[4]} className='border-right-bottom' />
          <Squre id={5} state={gameState[5]} className='border-bottom' />
          <Squre id={6} state={gameState[6]} className='border-right' />
          <Squre id={7} state={gameState[7]} className='border-right' />
          <Squre id={8} state={gameState[8]} />
        </div>
      </div>)}
      {(winner||steps===9)&&(
          <div className='winner-wrap'>
            <img src={require('./image/img.png') } alt='he' width={120} height={100}/>
            <div className='winner-text'>{ steps===9&&!winner ? 'Its a Draw': ` Player-${winner} Win!`}</div>
          </div>
      )}
      <div className='left-wrap'>
        <div className='left-text'> let's Play Tic toe game</div>
        <div className='button' onClick={resetGame}> start a new game</div>
        
      </div>
      
      </div>
    </div>
  );
}

export default App;
