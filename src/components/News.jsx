import "./News.css";
import desktop from "../assets/images/image-web-3-desktop.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import growth from "../assets/images/image-gaming-growth.jpg";

const News = () => {
  return (
    <div className="news__container">
      <img src={desktop} alt="colorful picture" className="banner__img"/>
      <div className="new__container">
        <h2>New</h2>
        <div className="new__news">
          <h3>New Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="new__news">
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="new__news">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <h1 className="header">The Bright Future of Web 3.0?</h1>
      <div className="bright__container">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
      <div className="rank__container">
        <img src={retro} alt="retro computer" />
        <h4>01</h4>
        <h5>Reviving Retro PCs</h5>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
      <div className="rank__container">
        <img src={laptop} alt="keyboard" />
        <h4>02</h4>
        <h5>Top 10 Laptops of 2022</h5>
        <p>Our best picks for various needs and budgets.</p>
      </div>
      <div className="rank__container">
        <img src={growth} alt="gaming controller" />
        <h4>03</h4>
        <h5>The Growth of Gaming</h5>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  );
};

export default News;
