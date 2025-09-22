import { Suspense, useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Availableplayers from './components/Availableplayers';
import Header from './components/Header';
import Selectedplayers from './components/Selectedplayers';

const fetchPlayers = async () =>{
  const res = await fetch('/players.json')
  return res.json();
}

const playersPromise = fetchPlayers();

function App() {
  const [select, setSelect] = useState(true);
  const [mainBalance, setMainBalance] = useState(60000000);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const removePlayer = (p) =>{
    const filteredData = choosePlayer.filter(plr => plr.playerId !== p.playerId);
    setChoosePlayer(filteredData);
    setMainBalance(mainBalance+parseInt(p.biddingPrice.split(",").join("").split("$").join("")))
  }

  return (
    <>
      <Header mainBalance={mainBalance}></Header>
      <div className='container pt-6 pb-8'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-2xl'>
            {
              select ? "Available Players" : `Selected Player (${choosePlayer.length}/6)`
            }
          </h2>
          <div className="join">
            <button className={`btn join-item ${select && 'bg-[#E7FE29]'} rounded-l-lg border-r-0 text-black border-[#e5e5e5]`} onClick={()=>setSelect(true)}>Available</button>
            <button className={`btn join-item ${!select && 'bg-[#E7FE29]'} border-l-0 text-black border-[#e5e5e5] rounded-r-lg`} onClick={()=>setSelect(false)}>Selected ({choosePlayer.length})</button>
          </div>
        </div>
      </div>

      <div className='container'>
        {
          select ? 
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Availableplayers choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} mainBalance={mainBalance} setMainBalance={setMainBalance} playersPromise={playersPromise}></Availableplayers>
            </Suspense> :
            <Selectedplayers removePlayer={removePlayer} choosePlayer={choosePlayer}></Selectedplayers>
        }
      </div>

      <ToastContainer />
    </>
  )
}
export default App
