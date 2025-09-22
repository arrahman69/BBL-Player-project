import React, { Suspense, useState } from 'react';
import AvilablePlayers from './components/AvilablePlayers/AvilablePlayers';
import SelectedPlayers from './components/AvilablePlayers/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import Spiner from './components/spinier/spiner';

const fetchPlayers = async () =>{
  const res = await fetch("/plyers.json")
  return res.json()
}

const App = () => {
const [toggle, setToggle] = useState(true)
  const playersPromise = fetchPlayers()
  return (
   
   <>
    <Navbar></Navbar>
<div className='max-w-[1200px] mx-auto flex justify-between items-center'>
<h1 className='font-bold text-2xl'>Avilable players</h1>

<div className='font-bold'>
  <button  onClick={()=> setToggle(true)} className={`py-2 px-6 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle=== true?"bg-[#E7FE29]":""}`}>Available</button>
  <button  onClick={()=>setToggle(false)} className={`py-2 px-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle=== false?"bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
</div>
</div>


{
  toggle === true?<Suspense fallback ={<Spiner></Spiner>}>
<AvilablePlayers playersPromise= {playersPromise}></AvilablePlayers>
  </Suspense> :  <SelectedPlayers></SelectedPlayers> 

}


   </>
  );
};

export default App;