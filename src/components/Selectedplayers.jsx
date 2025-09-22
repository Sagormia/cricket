import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const Selectedplayers = ({choosePlayer, removePlayer}) => {
    return (
        <>
            {
                choosePlayer.map(singPl => <SelectedPlayer key={singPl.playerId} removePlayer={removePlayer} singPl={singPl}></SelectedPlayer>)
            }
        </>
    )
};
export default Selectedplayers;