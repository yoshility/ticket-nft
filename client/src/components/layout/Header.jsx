import { ConnectButton } from "@rainbow-me/rainbowkit"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="logo">
        Ticket NFT
      </div>
      <form method="get" action="#" className="search-container">
        <input type="text" placeholder="   イベントを探す" />
        <input type="submit" value="🔍" />
      </form>
      <div className="wallet_button">
        <ConnectButton />
      </div>
    </header>
  );
}
