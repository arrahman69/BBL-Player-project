import React, { Suspense, useState } from 'react';
import AvilablePlayers from './components/AvilablePlayers/AvilablePlayers';
import SelectedPlayers from './components/AvilablePlayers/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import Spiner from './components/spinier/spiner';
import { ToastContainer, toast } from 'react-toastify';

const fetchPlayers = async () =>{
  const res = await fetch("/plyers.json")
  return res.json()
}
  const playersPromise = fetchPlayers()
const App = () => {
const [toggle, setToggle] = useState(true)
const [AvilableBalance,setAvailableBalance] = useState(500000)
const [purchasedPlayers,setPurchasedPlayers] = useState([])
// console.log(purchasedPlayers);
const removePlayer =(p) =>{
const filteredData = purchasedPlayers.filter(ply=>ply.name!== p.name)
console.log(filteredData);
setPurchasedPlayers(filteredData)
setAvailableBalance(AvilableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))

  
}


  return (
   
   <>
    <Navbar AvilableBalance ={AvilableBalance}></Navbar>
<div className='max-w-[1200px] mx-auto flex justify-between items-center'>
<h1 className='font-bold text-2xl'>{
  toggle===true?"AvilableBalance" : `Selected Player (${purchasedPlayers.length}/6)`
  }</h1>

<div className='font-bold'>
  <button  onClick={()=> setToggle(true)} className={`py-2 px-6 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle=== true?"bg-[#E7FE29]":""}`}>Available</button>
  <button  onClick={()=>setToggle(false)} className={`py-2 px-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle=== false?"bg-[#E7FE29]":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
</div>
</div>


{
  toggle === true?<Suspense fallback ={<Spiner></Spiner>}>
<AvilablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} AvilableBalance={AvilableBalance} setAvailableBalance = {setAvailableBalance}playersPromise= {playersPromise}></AvilablePlayers>
  </Suspense> :  <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers> 

}

 <ToastContainer />
   </>
  );
};

export default App;