import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player);
    const handleRemove =()=>{
        removePlayer(player)
    } 
    
    return (
      <div className=' w-[1200px] border-2 mt-5 border-[#D9D9D9]  flex justify-between items-center p-3 rounded-xl'>
                <div className='flex items-center'>
                    <img className='w-[90px] h-[80px] rounded-xl p-1' src={player.image} alt="" />
                    <div className='ml-2'>
                        <h1 className='font-bold text-2xl'>{player.name}</h1>
                        <p className='text-xs'>{player.role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img className='w-[40px]' src="https://i.ibb.co.com/5gNbBr2x/icons8-delete-100.png" alt="" />
                </div>

            </div>
  );
};

export default SelectedCard;