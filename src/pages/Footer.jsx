import logo from "../assets/images/footer-logo.png";
import PagesTitle from "../components/PagesTitle";
import "../styles/Footer.css";
import "../styles/768width.css";

function Footer() {
  return (
    <>
      <PagesTitle title="Footer"></PagesTitle>
      <footer>
        <div className="f-container">
          <div className="f-c-item f-c-item1">
            <div className="f-c-logo">
              <img src={logo} alt="" />
            </div>
            <div className="f-c-h1">&nbsp;&nbsp; follow us</div>
            <div className="f-c-icon">
              <a href="https://www.youtube.com/channel/UCixIFBnkoeAhtwd6mMeeWZg"><i className="bx bxl-youtube" /></a>
              <a href="https://www.facebook.com/people/ITechEducationOfficial/100088072031334/"><i className="bx bxl-facebook" /></a>
              <a href="https://www.instagram.com/itecheducation.official/"><i className="bx bxl-instagram" /></a>
            </div>
          </div>
          <div className="f-c-item f-c-item2">
            <div className="f-c-h1">Pages</div>
            <div className="f-c-h3">
              <a href="">Home</a>
            </div>
            <div className="f-c-h3">
              <a href="">Contact</a>
            </div>
            <div className="f-c-h3">
              <a href="">Shop</a>
            </div>
            <div className="f-c-h3">
              <a href="">Faq's</a>
            </div>
            <div className="f-c-h3">
              <a href="">Cart</a>
            </div>
            <div className="f-c-h3">
              <a href="">Signin</a>
            </div>
          </div>
          <div className="f-c-item f-c-item3">
            <div className="f-c-h1">Address</div>
            <div className="f-c-h3">
              <a href="">
                Head Office - Office. no.1, Civic Center, Opp. Panchmukhi
                Hanuman Temple, Station Road, Nalasopara West
              </a>
            </div>
            <div className="f-c-h3">
              <a href="">+91 911 211 4411</a>
            </div>
            <div className="f-c-h3">
              <a href="">info@i-tech.net.in</a>
            </div>
            <div className="f-c-h3">
              <a href="">Nallasopara west [401209]</a>
            </div>
          </div>
          <div className="f-c-item f-c-item4">
            <div className="f-c-h1">Information</div>
            <div className="f-c-h3">
              <a href="">Courses</a>
            </div>
            <div className="f-c-h3">
              <a href="">Blog</a>
            </div>
            <div className="f-c-h3">
              <a href="">Portfolio</a>
            </div>
            <div className="f-c-h3">
              <a href="">Privacy &amp; Polici</a>
            </div>
          </div>
        </div>
        <div className="f-c-bottom">
          <span className="f-c-copyright">
            @ 2010 created by A-man for I-tech Computer Education
          </span>
        </div>
      </footer>
    </>
  );
}
export default Footer;
