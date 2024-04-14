import previewImg from "./assets/image-equilibrium.jpg";
import authorIcon from "./assets/image-avatar.png";

function App() {
  return (
    <main>
      <article className="card">
        <img className="preview-img" src={previewImg} alt="" />

        <h1 className="header">Equilibrium #3429</h1>
        <p className="description">Our Equilibrium collection promotes balance and calm. </p>

        <div className="flex-group-price">
          <span className="price" data-price="eth-symbol">
            0.041 ETH
          </span>
          <span className="days-remain" data-time="time-icon">
            3 days left
          </span>
        </div>
        <hr />
        <div className="flex-group-author">
          <img className="author-img" src={authorIcon} alt="Author" />
          <p className="author-name">
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;
