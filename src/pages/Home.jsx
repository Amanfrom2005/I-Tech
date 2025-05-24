import "../styles/Home.css";
import HomePage1 from "./hero";
import InfiniteLogoSlider from "./Company";
import TechTraining from "./TechTraining";
import Footer from "./Footer";
import Contact from "./Contact";
import Testimonials from "./testimonials";

function Home() {
  return (
    <>
      <div id="home1"><HomePage1 /></div>
      <div id="home2"><InfiniteLogoSlider /></div>
      <div id="home3"><TechTraining /></div>
      <div id="home4"><Testimonials /></div>
      <div id="home5"><Contact /></div>
      <div id="home6"><Footer /></div>
    </>
  );
}

export default Home;
