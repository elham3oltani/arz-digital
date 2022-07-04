import React from 'react';
import spinner from "../icons/Snake.gif"
import style from './loader.module.css'
const Loader = () => {
    return (
        <div>
           <div className={style.loader}>
           <h1>Loading...</h1>
            <img src={spinner} />
           </div>
        </div>
    );
};

export default Loader;