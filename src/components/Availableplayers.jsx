import React from 'react';
import { use } from 'react';
import Player from './Player';

const Availableplayers = ({playersPromise, mainBalance, setMainBalance, choosePlayer, setChoosePlayer}) => {
    const playerData = use(playersPromise);
    return (
        <>
            <div className="grid md:grid-cols-3 gap-6 pb-14">
                {
                    playerData.map(player => <Player choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} mainBalance={mainBalance} setMainBalance={setMainBalance} key={player.playerId} player={player}></Player>)
                }
            </div>
        </>
    );
};
export default Availableplayers;