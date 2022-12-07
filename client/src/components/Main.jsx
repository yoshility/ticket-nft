import "./Main.css"

export const Main = () => {
  return (
    <div className="main">
      <div className="top_img">
        <h1 className="top_msg">Welcome to Ticket NFT!</h1>
      </div>
      <div className="ticket_list">
        <div className="ticket">
          <div className="ticket_img">画像表示</div>
          <p className="ticket_txt">これはチケット１です。</p>
        </div>
        <div className="ticket">
          <div className="ticket_img">画像表示</div>
          <p className="ticket_txt">これはチケット２です。</p>
        </div>
        <div className="ticket">
          <div className="ticket_img">画像表示</div>
          <p className="ticket_txt">これはチケット３です。</p>
        </div>
        <div className="ticket">
          <div className="ticket_img">画像表示</div>
          <p className="ticket_txt">これはチケット４です。</p>
        </div>
        <div className="ticket">
          <div className="ticket_img">画像表示</div>
          <p className="ticket_txt">これはチケット５です。</p>
        </div>
      </div>
    </div>
  );
}
