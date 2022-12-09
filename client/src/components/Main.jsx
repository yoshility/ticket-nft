import "./Main.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {StockCard} from "./StockCard";
import {StockDetail} from "./StockDetail";
import Shibuya from "../assets/Shibuya.jpg";
import Forest from "../assets/Forest.jpg";
import Cyber from "../assets/Cyber.jpg";
import Live from "../assets/Live.jpg";
import Tsumiki from "../assets/Tsumiki.jpg";
import Airplane from "../assets/Airplane.jpg";
import Stock from "../assets/Stock.jpg";
import {useEffect, useState} from "react";
import {ADDRESS, Crypto_stock} from "./crypto_stock.js";
import {useContract, useContractEvent, useProvider} from "wagmi";

// const myProvider = useProvider()
// const myContract = useContract({
//     address: ADDRESS,
//     abi: Crypto_stock,
//     signerOrProvider: myProvider,
// })

const TopPage = ({list}) => {
    // const [listStatus, setListStatus] = useState()
    //
    // useEffect(() => {
    //     fetch("http://localhost:8080/list", {
    //         method: "GET", mode: "cors"
    //     }).then(res => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //         throw new Error('Network response was not ok.')
    //     }).then(res => setListStatus(res))
    // }, [])

    return (
        <div className="main">
            <div className="top-img">
                <div className="top-msg1">Welcome to Crypto Stock!</div>
                <div className="top-msg2">Let's start investing.</div>
            </div>
            {list === undefined ? (
                <p>now loading ...</p>
            ) : (
                <div className="card-list">
                    {list.map(info => (
                        <StockCard
                            image={info.image}
                            name={info.event_name}
                            desc={info.explanation}
                            address={info.address}
                        />
                    ))}
                </div>
            )}
            <div className="full-page">
                <div className="full-page-button">
                    <a href="#" className="see">
                        すべての銘柄を見る
                    </a>
                </div>
            </div>
        </div>
    );
}

const MyStock = () => {
    return (
        <div>
            <h1 class="mystock-title">保有株式一覧</h1>
            <div className="card-list">
                <StockCard
                    image={Shibuya}
                    name="株式会社Angel Home"
                    desc="従来の不動産にとらわれない新しい価値を創造。エンジェルグループ新規ベンチャー。"
                    price={0.250}
                />
            </div>
        </div>
    );
}

export const Main = () => {
    const myProvider = useProvider()
    const myContract = useContract({
        address: ADDRESS,
        abi: Crypto_stock,
        signerOrProvider: myProvider,
    })

    const [prices, setPrices] = useState({})

    // useContractEvent({
    //     address: ADDRESS,
    //     abi: Crypto_stock,
    //     eventName: "Transfer",
    //     listener(_stock, _from, _to, _amount, _price) {
    //         prices[_stock] = _price
    //         setPrices(prices)
    //     }
    // })

    const [listStatus, setListStatus] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/list", {
            method: "GET", mode: "cors"
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Network response was not ok.')
        }).then(res => setListStatus(res))
    }, [])

    return (
        <BrowserRouter>
            <div className="wrap">
                <div className="side">
                    <div className="side-content">
                        <ul>
                            <li><Link to="/" className="link">＞ 銘柄一覧</Link></li>
                            <li><Link to="/mystock" className="link">＞ 保有株式一覧</Link></li>
                            <li>＞ 取引履歴</li>
                            <li>＞ ニュース</li>
                            <li>＞ 事業者の方へ</li>
                            <li>＞ 初めての方へ</li>
                        </ul>
                    </div>
                </div>
                {listStatus === undefined ? (
                    <switch>
                        <Route exact path="/" render={() => <TopPage list={listStatus}/>}/>
                        <Route path="/mystock" component={MyStock}/>
                    </switch>
                ) : (
                    <Switch>
                        <Route exact path="/" render={() => <TopPage list={listStatus}/>}/>
                        <Route path="/mystock" component={MyStock}/>
                        {listStatus.map(info => (
                            <Route
                                path={"/stockdetail/" + info.address}
                                render={() => (
                                    <StockDetail
                                        image={info.image}
                                        name={info.event_name}
                                        desc={info.explanation}
                                        address={info.address}
                                        price={prices}
                                        contract={myContract}
                                    />
                                )}
                            />
                        ))}
                    </Switch>
                )}
            </div>
        </BrowserRouter>
    );
}
