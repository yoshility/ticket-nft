import * as React from 'react';
import Button from '@mui/material/Button';
import Live from "../assets/Live.jpg";
import Crown from "../assets/Live.jpg";
import "./StockDetail.css";

export const StockDetail = () => {
    return (
        <div>
            <img src={Live} className="top-img" />
            <img src={Crown} alt="王冠" className="icon" />
            <div className="content">
                <h2 className="name">株式会社Queen Record</h2>
                <h3>登録日 <span>Aug 2022</span>   チェーン <span>Ethereum</span>   時価 <span>0.01 ETH</span></h3>
                <h3 className="desc">10周年ライブが2034年2月に開催決定！バーチャルアーティスト事業の先駆け。</h3>
                <div  className="button">
                    <Button variant="contained" size="large">購入する</Button>
                </div>
            </div>
        </div>
    );
  }
