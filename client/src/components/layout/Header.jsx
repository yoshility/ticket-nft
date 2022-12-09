import { ConnectButton } from "@rainbow-me/rainbowkit"
import Logo from "../../assets/Logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" />
      <div className="search">
        <div className="search-box">
          <p>　銘柄を探す</p>
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
