import React, { use } from "react";
import userImg from "../../assets/user-1.svg";
import flagImg from "../../assets/report-1.svg";

const AvilablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img src={player.image} alt="Shoes" />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userImg} alt="" />
              <h2 className="card-title ml-2">{player.name}</h2>
            </div>

            <div className="flex justify-between border-b-1 pb-3 border-gray-300">
              <div className="flex mt-4">
                <img className="w-[20px] h-[20px] mt-1" src={flagImg} alt="" />
                <span className="ml-3 mt-1">{player.country}</span>
              </div>
              <div>
                <button className=" btn mt-4">{player.role}</button>
              </div>
            </div>

            <div className="flex justify-between font-bold">
              <span>Rating :</span>
              <span> {player.rating}</span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="font-bold">{player.batting_style}</span>
              <span> {player.bowling_style} </span>
            </div>

            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="font-bold">Price : ${player.price}</p>
              <button className="btn btn-primary">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvilablePlayers;
