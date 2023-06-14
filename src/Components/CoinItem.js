import React from 'react'
import './Coins.css'

const CoinItem = (props) => {
  return (
    <div className='dabba'>
    <div className='coin_row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img_symbol'>
            <img src={props.coins.image} alt=''/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide_mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide_mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
    </div>
  )
}

export default CoinItem
