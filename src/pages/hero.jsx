import "../styles/Home.css";
import ImageSlider from "../components/ImageSlider";
import mDetail2 from "../assets/images/logo-outline.png";

function HomePage1() {
  return (
    <main>
      <section className="main-1">
        <div className="main-1-detail">
          <div className="detail-1 m-detail">
            <h6 className="main-subtile">I-TECH</h6>
            <h3 className="main-title-1">Evolve faster than tech itself</h3>
            <p className="main-p">
              Tech skills only have a 2.5 year lifespan, leaving 85 million jobs
              unfilled due to massive skills gaps. Don't get left in the
              dust—elevate your tech learning today.
            </p>
          </div>
          <div className="detail-2 m-detail">
            <ImageSlider></ImageSlider>
          </div>
        </div>
        <div className="main-2-detail">
          <img src={mDetail2} alt="" />
        </div>
      </section>

      <section className="main-2">
        
      </section>
    </main>
  );
}

export default HomePage1;
