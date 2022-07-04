import React, {useEffect,useState} from 'react';
import {getCoin} from '../services/Api';
import Coin from './Coin';
import Loader from './Loader';
import style from './landing.module.css'
const Landing = () => {
   const [coins,setCoins]=useState([])
   const [search,setSearch]=useState([])

  useEffect (() => {
    const fetchApi = async () => {
      const data = await getCoin ();
      setCoins(data)
    };
    fetchApi ();
  }, []);


  const changeHandler=(event)=>{
         setSearch(event.target.value)
  }

const searchedCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search))

  return (

    <>
    <input type="text" value={search} onChange={changeHandler} className={style.searchBox} placeholder="Search" />
  <div>
    {searchedCoins.length ?
         <div className={style.container}>
    
    {searchedCoins.map(item=><Coin key={item.id} name={item.name} image={item.image} symbol={item.symbol} price={item.current_price} marketCap={item.market_cap} priceChange={item.price_change_percentage_24h}  />)}
        </div>
:
<Loader />
}
   
  </div> 
  
    </>
  )
}
export default Landing;
