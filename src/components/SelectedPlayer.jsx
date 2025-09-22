import React from 'react';
import deleteImg from '../assets/delete.svg'

const Selectedplayer = ({singPl, removePlayer}) => {
    const handgleRemove = () =>{
        removePlayer(singPl);
    }
    return (
        <div className='border mb-6 border-gray-200 rounded-xl p-6 flex items-center justify-between gap-x-6'>
            <div className='flex items-center gap-x-6'>
                <img src={singPl.image} className='w-20 rounded-xl aspect-square object-cover' alt="" />
                <div>
                    <h4 className='text-2xl font-bold'>{singPl.name}</h4>
                    <p className='text-gray-500 mt-1'>{singPl.battingStyle}</p>
                </div>
            </div>
            <div className='cursor-pointer' onClick={handgleRemove}>
                <img src={deleteImg} className='w-4.5' alt="" />
            </div>
        </div>
    );
};
export default Selectedplayer;