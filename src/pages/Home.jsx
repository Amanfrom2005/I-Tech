import "../styles/Home.css";
import HomePage1 from "../components/HomePage1";
import InfiniteLogoSlider from "../components/InfinitLogoSlider";
import PagesTitle from "../components/PagesTitle";
import Footer from "./Footer";


function Home() {
  return(
    <>
      <HomePage1></HomePage1>
      <InfiniteLogoSlider></InfiniteLogoSlider>
      <Footer></Footer>
    </>
  );
}

export default Home;
