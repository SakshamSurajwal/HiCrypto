import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const params=useParams();
  const [chartData,setChartData]=useState([]);
  const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=14`;

  useEffect(()=>{
    axios.get(url).then((res)=>{
      const coinChartData=res.data.prices.map(val=>({
        x:val[0],y:val[1].toFixed(2)
      }));

      setChartData(coinChartData);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const options={
    responsive:true
  }

  const data={
    labels: chartData.map(val=>moment(val.x).format('MMMDD')),
    datasets: [
      {
        fill:true,
        data:chartData.map(val=> val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        label: params.coinId
      }
    ]
  }

  return (
    <div>
      <Line options={options} data={data}/>
    </div>
  )
}

export default HistoryChart
