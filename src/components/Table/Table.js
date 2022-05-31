import './Table.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Table(props){

  const [task, setTask] = useState({});

  

  useEffect(() => {
    axios
      .get(
        'https://api.coincap.io/v2/assets'
      )
      .then(res => {
        setTask(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  },[]);
    return(
            <div className='tabel-responsive-sm'>
<table className='table'>
      <thead>
        <tr>
          <th>RANK</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>MARKET CAP</th>
          <th>VOLUME</th>
          <th>CHANGE %</th>
          <th>VWAP</th>
          <th>SUPPLY</th>
        </tr>
      </thead>
    {task.data && task.data.slice(0,props.value).map((coin)=>{
      const sym=coin.symbol.toLowerCase();
      return (
        <tr key={coin.id} >
        <td>{coin.rank}</td>
        <td>
        <img src={"https://assets.coincap.io/assets/icons/" +sym +"@2x.png"} alt='icon' className='img'/>
        {coin.name}
        </td>
        <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
        <td>${parseFloat(coin.marketCapUsd).toFixed(2)}</td>
        <td>${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</td>
        <td>{parseFloat(coin.changePercent24Hr).toFixed(2)}</td>
        <td>${parseFloat(coin.vwap24Hr).toFixed(2)}</td>
        <td>{parseFloat(coin.supply).toFixed(2)}</td>
        </tr>
          )
    })}
    </table>


</div>
    )
}

export default Table;