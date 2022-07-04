import React from 'react';
import style from './coin.module.css';
const Coin = ({image, name, symbol, price, marketCap, priceChange}) => {
  return (
    
      <div className={style.container}>
        <img src={image} alt={name} className={style.logo_img} />
        <span className={style.name_arz}>{name}</span>
        <span className={style.symbol_arz}>{symbol.toUpperCase ()}</span>
        <span className={style.price_arz}>$ {price.toLocaleString ()}</span>
        <span className={priceChange > 0 ?  style.greenPriceChange : style.redPriceChange}> {priceChange.toFixed(2)}%</span>
        <span className={style.marketCap_arz}>$ {marketCap.toLocaleString ()}</span>
      
    </div>
  );
};

export default Coin;
