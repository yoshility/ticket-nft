import * as React from 'react';
import Button from '@mui/material/Button';
import Live from "../assets/Live.jpg";
import Crown from "../assets/Crown.png";
import "./StockDetail.css";

export const StockDetail = () => {
    return (
        <div>
            <img src={Live} className="top-img" />
            <img src={Crown} className="icon" />
            <h2 className="name">株式会社Queen Record</h2>
            <h3>登録日 <span>Aug 2022</span>   チェーン <span>Ethereum</span>   時価 <span>0.01 ETH</span></h3>
            <h3 className="desc">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
            <div>
                <Button variant="contained" className="button">購入する</Button>
            </div>
        </div>
    );    
  }