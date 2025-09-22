import React, { Suspense } from 'react';
import AvilablePlayers from './components/AvilablePlayers/AvilablePlayers';
import SelectedPlayers from './components/AvilablePlayers/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import Spiner from './components/spinier/spiner';

const fetchPlayers = async () =>{
  const res = await fetch("/plyers.json")
  return res.json()
}

const App = () => {

  const playersPromise = fetchPlayers()
  return (
   
   <>
    <Navbar></Navbar>

<Suspense fallback ={<Spiner></Spiner>}>
<AvilablePlayers playersPromise= {playersPromise}></AvilablePlayers>
  </Suspense>

{/* <SelectedPlayers></SelectedPlayers> */}
   </>
  );
};

export default App;