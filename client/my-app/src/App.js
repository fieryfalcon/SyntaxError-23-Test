
import './App.css';
import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from 'react';
import Home, { Game } from "./pages/home/Home";
// import GameContext from './gameContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { customAlphabet } from 'nanoid'
import { redirect } from 'next/dist/server/api-utils';

import Game2 from './pages/Game2';
const nanoid = customAlphabet('1234567890abcdef', 5)

const GameContext = createContext();
const PlayerNumContext = createContext();
const Category = createContext();
const RoomCreated = createContext();

// const socket = io.connect("http://localhost:8080");

function App() {
  const [isInRoom, setInRoom] = useState(false);
  const [playerNumber, setPlayerNumber] = useState();
  const [category, setCategory ] = useState('');
  const [roomCreated, setCreated] = useState('');
  // const [isInRoom,setInRoom] = useState(false)
  // socket.on('start_game',()=>{
  //   console.log("The game has started for you!");
  //   setInRoom(true);
  
  // })
  // const gameContextValue={
  //   isInRoom,
  //   setInRoom
  // }

  return (
    <GameContext.Provider value={{isInRoom,setInRoom}}>
    <PlayerNumContext.Provider value = {{playerNumber, setPlayerNumber}}>
    <Category.Provider value = {{category, setCategory}}>
    <RoomCreated.Provider value = {{roomCreated, setCreated}}>
    <div>
    {!isInRoom && <Home/>}
    {isInRoom && playerNumber===1 &&  <Game cat = {category} room={roomCreated}/>}
    {isInRoom && playerNumber===2 &&  <Game2 categ = {category}/>}
      
    </div>
    </RoomCreated.Provider>
    </Category.Provider>
    </PlayerNumContext.Provider>
    </GameContext.Provider>
    
    // {}
  );
}

export default App;
export {GameContext, PlayerNumContext, Category, RoomCreated}
