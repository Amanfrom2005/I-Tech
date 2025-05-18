import "../styles/Home.css";
import "../styles/Animation.css";

import logo1 from "../assets/images/logo-img/accenture.webp";
import logo2 from "../assets/images/logo-img/Dope-logo.webp";
import logo3 from "../assets/images/logo-img/ibm.webp";
import logo4 from "../assets/images/logo-img/icici-bank.webp";
import logo5 from "../assets/images/logo-img/make-my-trip.webp";
import logo6 from "../assets/images/logo-img/red-chillies.webp";
import logo7 from "../assets/images/logo-img/tata-tcs.webp";
import logo8 from "../assets/images/logo-img/Tech-Mahindra.webp";

import affiliation1 from "../assets/images/affiliation-logo/ISO-logo.webp";
import affiliation2 from "../assets/images/affiliation-logo/msme.webp";
import affiliation3 from "../assets/images/affiliation-logo/NIELIT_Logo.webp";

import PagesTitle from "./PagesTitle";

function InfiniteLogoSlider() {
  return (
    <>
      <PagesTitle
        title="Company Name"
        paragraph="Where Talent Meets Opportunity — Backed by Leading Partners"
      />
      <section className="logo-slider-section">
            <div className="logos-slider-container">
              <div className="slide">
                <img src={logo1} alt="" />
              </div>
              <div className="slide">
                <img src={logo2} alt="" />
              </div>
              <div className="slide">
                <img src={logo3} alt="" />
              </div>
              <div className="slide">
                <img src={logo4} alt="" />
              </div>
              <div className="slide">
                <img src={logo5} alt="" />
              </div>
              <div className="slide">
                <img src={logo6} alt="" />
              </div>
              <div className="slide">
                <img src={logo7} alt="" />
              </div>
              <div className="slide">
                <img src={logo8} alt="" />
              </div>
            </div>
      </section>
      <PagesTitle
        title="Affiliations"
        paragraph="We proudly collaborate with leading organizations to create meaningful opportunities and shared success."
      />
      <section className="logo-slider-section">
            <div className="logos-slider-container">
              <div className="slide">
                <img src={affiliation1} alt="" />
              </div>
              <div className="slide">
                <img src={affiliation2} alt="" />
              </div>
              <div className="slide">
                <img src={affiliation3} alt="" />
              </div>
            </div>
      </section>
    </>
  );
}

export default InfiniteLogoSlider;
