import "./Main.css";
import { StockCard } from "./StockCard";
import Shibuya from "../assets/Shibuya.jpg";
import Forest from "../assets/Forest.jpg";
import Cyber from "../assets/Cyber.jpg";
import Live from "../assets/Live.jpg";
import Tsumiki from "../assets/Tsumiki.jpg";
import Airplane from "../assets/Airplane.jpg";
import Stock from "../assets/Stock.jpg";

export const Main = () => {
  return (
    <div className="wrap">
      <div className="side">
        <div className="side-content">
          <h2>＞ 銘柄一覧</h2>
          <h2>＞ 保有株式一覧</h2>
          <h2>＞ 取引履歴</h2>
          <h2>＞ ニュース</h2>
          <h2>＞ 事業者の方へ</h2>
        </div>
      </div>
      <div className="main">
        <div className="top-img">
          <div className="top-msg1">Welcome to Crypto Stock!</div>
          <div className="top-msg2">Let's start investing.</div>
        </div>
        <div className="card-list">
          <StockCard
            image={Shibuya}
            name="株式会社Angel Home"
            desc="従来の不動産にとらわれない新しい価値を創造。エンジェルグループ新規ベンチャー。"
            price={0.250}
          />
          <StockCard
            image={Forest}
            name="東京七釜戸株式会社"
            desc="新奥地区初の再開発始動！次世代自然連携型スマートシティの未来。"
            price={0.750}
          />
          <StockCard
            image={Cyber}
            name="デジタルフェニックス株式会社"
            desc="半永久不滅な自律分散型クラウド。あなたの財産を守ります。"
            price={0.112}
          />
          <StockCard
            image={Live}
            name="株式会社Queen Record"
            desc="10周年ライブが2034年2月に開催決定！バーチャルアーティスト事業の先駆け。"
            price={1.341}
          />
          <StockCard
            image={Tsumiki}
            name="株式会社八田教育センター"
            desc="学習用アプリ「八田式チャレンジ」正式リリース！人気講師多数在籍！"
            price={0.350}
          />
          <StockCard
            image={Airplane}
            name="S&K株式会社"
            desc="航空業界にDXを。半自動型運航スケジュール作成システム。"
            price={1.063}
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
    </div>
  );
}
