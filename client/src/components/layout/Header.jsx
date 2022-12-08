import { ConnectButton } from "@rainbow-me/rainbowkit"
// import { logo } from "../../assets/Logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="logo">Crypto Stock</div>
      <div className="search">
        <div className="search-box">
          <p>　　　銘柄を探す</p>
        </div>
        <div className="search-button">
          <p>検索</p>
        </div>
      </div>
      <div className="wallet_button">
        <ConnectButton />
      </div>
    </header>
  );
}
