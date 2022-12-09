import "./Main.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { StockCard } from "./StockCard";
import { StockDetail } from "./StockDetail";
import Shibuya from "../assets/Shibuya.jpg";
import Forest from "../assets/Forest.jpg";
import Cyber from "../assets/Cyber.jpg";
import Live from "../assets/Live.jpg";
import Tsumiki from "../assets/Tsumiki.jpg";
import Airplane from "../assets/Airplane.jpg";
import Stock from "../assets/Stock.jpg";

const TopPage = () => {
  return (
    <div className="main">
      <div className="top-img">
        <div className="top-msg1">Welcome to Crypto Stock!</div>
        <div className="top-msg2">Let's start investing.</div>
      </div>
      <div className="card-list">
        <StockCard
            image={Live}
            name="株式会社Queen Record"
            desc="10周年ライブが2034年2月に開催決定！バーチャルアーティスト事業の先駆け。"
        />
        <StockCard
          image={Shibuya}
          name="株式会社Angel Home"
          desc="従来の不動産にとらわれない新しい価値を創造。エンジェルグループ新規ベンチャー。"
        />
        <StockCard
          image={Forest}
          name="東京七釜戸株式会社"
          desc="新奥地区初の再開発始動！次世代自然連携型スマートシティの未来。"
        />
        <StockCard
          image={Cyber}
          name="デジタルPhoenix株式会社"
          desc="半永久不滅な自律分散型クラウド。あなたの財産を守ります。"
        />
        <StockCard
          image={Tsumiki}
          name="株式会社八田教育センター"
          desc="学習用アプリ「八田式チャレンジ」正式リリース！人気講師多数在籍！"
        />
        <StockCard
          image={Airplane}
          name="S&K株式会社"
          desc="航空業界にDXを。半自動型運航スケジュール作成システム。"
        />
      </div>
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
  return (
    <BrowserRouter>
      <div className="wrap">
        <div className="side">
          <div className="side-content">
            <ul>
              <li><Link to="/" className="link">＞ 銘柄一覧</Link></li>
              <li><Link to="/stockdetail" className="link">＞ 保有株式一覧</Link></li>
              <li>＞ 取引履歴</li>
              <li>＞ ニュース</li>
              <li>＞ 事業者の方へ</li>
              <li>＞ 初めての方へ</li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route path="/stockdetail" component={StockDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
