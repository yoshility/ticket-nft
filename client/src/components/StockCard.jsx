import "./Main.css"

export const StockCard = (props) => {
  return (
    <div className="card">
      <img src={props.image}  alt="画像" className="card-img" />
      <h2 className="card-title">{props.name}</h2>
      <p className="card-txt">{props.desc}</p>
      <p className="card-price">{props.price} ETH</p>
      <button className="card-button">購入する</button>
    </div>
  );
}
