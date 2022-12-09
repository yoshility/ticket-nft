import * as React from 'react';
import Button from '@mui/material/Button';
import Live from "../assets/Live/jpg";

export const StockDetail = () => {
    return (
        <div>
            <img src={Live} className="top-img" />
            <div className="icon"></div>
            <h2 className="name">株式会社Queen Record</h2>
            <h3 className="desc">登録日 Aug 2022   チェーン Ethereum   時価 0.01 ETH</h3>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <Button variant="contained">購入する</Button>
        </div>
    );    
  }