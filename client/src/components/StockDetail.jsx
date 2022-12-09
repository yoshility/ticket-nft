import * as React from 'react';
import Button from '@mui/material/Button';
// import Live from "../assets/Live.jpg";
// import Crown from "../assets/Live.jpg";
import "./StockDetail.css";
import {useEffect, useState} from "react";
import {useSigner} from "wagmi";
import {useConnectModal} from "@rainbow-me/rainbowkit";

const buyTaker = (contract, props) => {
    contract.buyTaker(props.stock, props.amount, {value: props.amount * props.price})
}

const buyMaker = (contract, props) => {
    contract.buyMaker(
        props.stock, props.amount, props.price,
        {value: props.amount * props.price})
}

const sellMaker = (contract, props) => {
    contract.sellMaker(props.stock, props.amount, props.price)
}

const sellTaker = (contract, props) => {
    contract.sellTaker(props.stock, props.amount)
}

const IWritableContract = ({contract, async_fun, props, label}) => {
    const {data: signer} = useSigner()
    const {openConnectModal} = useConnectModal()

    const req_send = async () => {
        if (!signer) return
        const writableContract = contract.connect(signer)
        try {
            const tx = await async_fun(writableContract, props);
            await tx.wait()
        } catch (err) {
            console.error(err)
        }
    }

    if (!signer) {
        return (
            <Button variant="contained" size="large" onClick={openConnectModal}>{label}</Button>
        )
    }
    return (
        <Button variant="contained" size="large" onClick={req_send}>{label}</Button>
    )
}

export const StockDetail = ({image, name, desc, address, price, contract}) => {
    const [p, setP] = useState()
    useEffect(() => {
        contract.getPrice(address).then(_p => {
            console.log(_p)
            setP(_p.toNumber())
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const [_amount, setAmount] = useState("");
    const [_price, setPrice] = useState(1)

    return (
        <div>
            <img src={image} className="top-img"/>
            <img src={image} alt="王冠" className="icon"/>
            <div className="content">
                <h2 className="name">{name}</h2>
                <h3>銘柄名 <span>{address}</span> 時価 <span>{p === undefined ? "---" : (price[address] === undefined ? p : price[address])} WEI</span>
                </h3>
                <h3 className="desc">{desc}</h3>
                <div className="button">
                    <IWritableContract contract={contract} async_fun={buyTaker} label="成買い" props={{
                        stock: address, amount: _amount, price: Math.floor(p * 3 / 2)
                    }}></IWritableContract>
                    <IWritableContract contract={contract} async_fun={sellTaker} label="成売り" props={{
                        stock: address, amount: _amount,
                    }}></IWritableContract>
                    <br/>
                    <IWritableContract contract={contract} async_fun={buyMaker} label="指値買い" props={{
                        stock: address, amount: _amount, price: _price
                    }}></IWritableContract>
                    <IWritableContract contract={contract} async_fun={sellMaker} label="指値売り" props={{
                        stock: address, amount: _amount, price: _price
                    }}></IWritableContract>
                    <br/>
                    <p>数量</p>
                    <input value={_amount} onChange={(e) => setAmount(e.target.value)}/>
                    <p>価格</p>
                    <input value={_price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}
