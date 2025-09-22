import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvilablePlayers = ({ playersPromise,setAvailableBalance,AvilableBalance,setPurchasedPlayers,purchasedPlayers }) => {
  const playerData = use(playersPromise);
//   console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {
      playerData.map(player => <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} AvilableBalance={AvilableBalance} setAvailableBalance={setAvailableBalance} player= {player}></PlayerCard>)

      }
    </div>
    );
};


export default AvilablePlayers
