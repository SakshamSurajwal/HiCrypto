import React, { useEffect, useState } from 'react'
import './Coin.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HistoryChart from './HistoryChart';

const Coin = () => {
  const params=useParams();
  const [coin,setCoin]=useState({});
  const [description,setDescription]=useState("");
  const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(()=>{
    axios.get(url).then((res)=>{
      setCoin(res.data);
      setDescription(res.data.description.en);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div>
      <div className='coin_container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank_btn'>Rank {coin.market_cap_rank ? coin.market_cap_rank: null}</span>
          </div>
          <div className='info'>
            <div className='coin_heading'>
              {coin.image?<img src={coin.image.small} alt=''/>: null}
              <p>{coin.name}</p>
              <p id='sym'>{coin.symbol}</p>
            </div>
            <p className='des' dangerouslySetInnerHTML={{__html: description}}></p>
          </div>
        </div>
        <div className='chart'>
          <HistoryChart/>
        </div>
      </div>
    </div>
  )
}

export default Coin
