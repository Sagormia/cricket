
import flag from '../assets/flag.png';
import { toast } from 'react-toastify';
const Player = ({player, mainBalance, setMainBalance, choosePlayer, setChoosePlayer}) => {
    const isSelect = choosePlayer.some(p => p.playerId === player.playerId);
    function handleSelected(playerData) {
        const playerPrice = playerData.biddingPrice.split(",").join("").split("$").join("");
        if (mainBalance < playerPrice) {
            toast("Not enough Balance");
            return;
        }
        if (choosePlayer.length === 6) {
            toast("6 players is already selected");
            return;
        }
        setMainBalance(mainBalance - playerPrice);
        setChoosePlayer([...choosePlayer, playerData]);
    }
    return (
        <div className="card bg-base-100 p-6 border border-gray-200">
            <figure>
                <img src={player.image} className='rounded-lg w-full h-[16rem] object-cover' alt="" />
            </figure>
            <div className='pt-6'>
                <h2 className="card-title text-xl">{player.name}</h2>
                <div className='flex items-center justify-between border-b border-gray-200 py-4'>
                    <div className='flex items-center gap-2.5'>
                        <img src={flag} className='w-4.4 h-4.5' alt="" />
                        <span className='text-gray-400'>{player.country}</span>
                    </div>
                    <div className="rounded-lg px-4 py-1.5 text-sm text-dark bg-gray-100">{player.role}</div>
                </div>
                <div className='flex items-center justify-between pt-4 pb-3'>
                    <p><strong>{player.battingStyle}</strong></p>
                    <p>{player.bowlingStyle}</p>
                </div>
                <div className="card-actions items-center justify-between">
                    <p><strong>Price: {player.biddingPrice}</strong></p>
                    <button className="btn rounded-lg bg-transparent" disabled={isSelect} onClick={()=>handleSelected(player)}>
                        {isSelect ? 'Selected' :  "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;