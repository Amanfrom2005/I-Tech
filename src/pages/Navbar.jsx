import React, { useState, useEffect, useRef } from "react";

import "../styles/Navbar.css";
import "../styles/Animation.css";
import "../styles/768width.css";
import "../styles/1024width.css";

import pythonBook from "../assets/images/python-book.webp";
import javaBook from "../assets/images/java-book.webp";
import javascriptBook from "../assets/images/javascript-book.webp";
import homeImage1 from "../assets/images/mm-hp1.webp";
import homeImage2 from "../assets/images/mm-hp1.webp";
import homeImage3 from "../assets/images/mm-hp1.webp";
import homeImage4 from "../assets/images/mm-hp1.webp";
import homeImage5 from "../assets/images/mm-hp1.webp";
import homeImage6 from "../assets/images/mm-hp1.webp";

import CartButton from "../components/CartButton";
import UserButton from "../components/UserButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [setOpenSubmenuIndex] = useState(null);

  const menuRef = useRef(null); // Ref for the mobile menu
  const iconRef = useRef(null); // Ref for the menu icon

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenuIndex(null);
  };

  const handleSubmenuToggle = (index, hasSubmenu, e) => {
    if (hasSubmenu) {
      e.preventDefault();
      e.stopPropagation();
      setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
    } else {
      handleCloseMenu();
    }
  };

  // 👇 Outside click detection using useEffect
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        handleCloseMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },);
  return (
    <header id="header">
      <div className="header-container">
        <div className="logo">
          <a href="./index.html">
            <h2>I-TECH</h2>
          </a>
        </div>
        <nav className="pc-nav">
          <ul>
            <li>
              <a href="#home">
                HOME <i className="bx bx-down-arrow" />
              </a>
              <ul className="home">
                <li>
                  <a href="#home-1.html">
                    <img
                      className="home-img"
                      src={homeImage1}
                      alt="Home Image 1"
                    />
                    <div className="hover-title">
                      HOME 1 <br /> <span>PC GAME</span>
                    </div>
                  </a>
                  <a href="#home-2.html">
                    <img
                      className="home-img"
                      src={homeImage2}
                      alt="Home Image 2"
                    />
                    <div className="hover-title">
                      HOME 2 <br /> <span>ESPORT TEAM</span>
                    </div>
                  </a>
                  <a href="#home-3.html">
                    <img
                      className="home-img"
                      src={homeImage3}
                      alt="Home Image 3"
                    />
                    <div className="hover-title">
                      HOME 3 <br /> <span>MOBILE GAME</span>
                    </div>
                  </a>
                  <a href="#home-4.html">
                    <img
                      className="home-img"
                      src={homeImage4}
                      alt="Home Image 4"
                    />
                    <div className="hover-title">
                      HOME 4 <br /> <span>ESPORT TEAM</span>
                    </div>
                  </a>
                  <a href="#home-5.html">
                    <img
                      className="home-img"
                      src={homeImage5}
                      alt="Home Image 5"
                    />
                    <div className="hover-title">
                      HOME 5 <br /> <span>ESPORTS SHOP</span>
                    </div>
                  </a>
                  <a href="#home-6.html">
                    <img
                      className="home-img"
                      src={homeImage6}
                      alt="Home Image 6"
                    />
                    <div className="hover-title">
                      HOME 6 <br /> <span>GAMERS FORUM</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#pages">
                PAGES <i className="bx bx-down-arrow" />
              </a>
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#our-team">Our Team</a>
                </li>
                <li>
                  <a href="#team-single">Team Single</a>
                </li>
                <li>
                  <a href="#tournament-list">Tournament List</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#our-history">Our History</a>
                </li>
                <li>
                  <a href="#faq's">Faq’s</a>
                </li>
                <li>
                  <a href="#philosopy">Philosophy</a>
                </li>
                <li>
                  <a href="#typography">Typography</a>
                </li>
                <li>
                  <a href="#elements">Elements</a>
                </li>
                <li>
                  <a href="#page-404">Page 404</a>
                </li>
                <li>
                  <a href="#mega-menu-page">Mega Menu Page</a>
                </li>
                <li>
                  <a href="#coming-soon">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#blog">
                BLOG <i className="bx bx-down-arrow" />
              </a>
              <ul>
                <li>
                  <a href="#blog-list">Blog List</a>
                </li>
                <li>
                  <a href="#blog-grid">Blog Grid</a>
                </li>
                <li>
                  <a className="color-black" href="#blog-masonry">
                    Blog Masonry <i className="bx bx-down-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="#blog-masonry-2-columns">2 columns</a>
                    </li>
                    <li>
                      <a href="#blog-masonry-2-col-+-sidebar">
                        2 col + sidebar
                      </a>
                    </li>
                    <li>
                      <a href="#blog-masonry-3-columns">3 columns</a>
                    </li>
                    <li>
                      <a href="#blog-masonry-4-col-wide">4 col wide</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="color-black" href="#blog-singles">
                    Blog Singles <i className="bx bx-down-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="#blog-singles-standard">Standard</a>
                    </li>
                    <li>
                      <a href="#blog-singles-video">Video</a>
                    </li>
                    <li>
                      <a href="#blog-singles-quote">Quote</a>
                    </li>
                    <li>
                      <a href="#blog-singles-gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="#blog-singles-link">Link</a>
                    </li>
                    <li>
                      <a href="#blog-singles-audio">Audio</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="color-black" href="#single-layouts">
                    Single Layouts <i className="bx bx-down-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="#single-layouts-overlay-image">Overlay Image</a>
                    </li>
                    <li>
                      <a href="#single-layouts-title-first">Title First</a>
                    </li>
                    <li>
                      <a href="#single-layouts-image-first">Image First</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#portfolio">
                PORTFOLIO <i className="bx bx-down-arrow" />
              </a>
              <ul>
                <li>
                  <a className="color-black" href="#grid">
                    Grid <i className="bx bx-down-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="grid-2-columns">2 columns</a>
                    </li>
                    <li>
                      <a href="grid-3-columns">3 columns</a>
                    </li>
                    <li>
                      <a href="grid-4-col-wide">4 col wide</a>
                    </li>
                    <li>
                      <a href="grid-5-col-wide">5 col wide</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="color-black" href="#mansonry">
                    Masonry <i className="bx bx-down-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="#mansonry-grid-1">Grid 1</a>
                    </li>
                    <li>
                      <a href="#mansonry-grid-2">Grid 2</a>
                    </li>
                    <li>
                      <a href="#mansonry-grid-3">Grid 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#single">Single</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#shop">
                SHOP <i className="bx bx-down-arrow" />
              </a>
              <ul className="shop">
                <li className="shop-item-list">
                  <div className="shop-item-top shop-item-top-1">
                    <a className="shop-title">SHOP</a>
                    <a className="shop-link" href="#Products-grid">
                      Products Grid
                    </a>
                    <a className="shop-link" href="#single-product">
                      Single Product
                    </a>
                    <a className="shop-link" href="#cart">
                      Cart
                    </a>
                    <a className="shop-link" href="#checkout">
                      Checkout
                    </a>
                    <a className="shop-link" href="#wishlist">
                      Wishlist
                    </a>
                    <a className="shop-link" href="#login-register">
                      Login - Register
                    </a>
                    <a className="shop-link" href="#help-center">
                      Help Center
                    </a>
                  </div>
                  <div className="shop-item">
                    <div className="shop-item-top">
                      <a className="Product" href="#product-1">
                        <img
                          className="shop-item-image"
                          src={pythonBook}
                          alt="Shop Item 1"
                        />
                      </a>
                    </div>
                    <div className="shop-item-name">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <a href="#product-1">HOODIE WITH LOGO</a>
                      <div className="shop-item-price">$70.00</div>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="shop-item-top">
                      <a className="Product" href="#product-2">
                        <img
                          className="shop-item-image"
                          src={javaBook}
                          alt="Shop Item 2"
                        />
                      </a>
                    </div>
                    <div className="shop-item-name">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <a href="#product-2">T-SHIRT WITH LOGO</a>
                      <div className="shop-item-price">$50.00</div>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="shop-item-top">
                      <a className="Product" href="#product-3">
                        <img
                          className="shop-item-image"
                          src={javascriptBook}
                          alt="Shop Item 3"
                        />
                      </a>
                    </div>
                    <div className="shop-item-name">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <a href="#product-3">MUG WITH LOGO</a>
                      <div className="shop-item-price">$20.00</div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="contact">
              <a href="#contact">CONTACT</a>
              <ul>
                <div className="contact-container">
                  <li className="contact-1">
                    <h1 className="content-title">CONTACTS</h1>
                    <h3 className="content-address">
                      I-tech, vasai[W], Maharastra
                      <br /> Palghar 401208, India
                    </h3>
                    <h2 className="content-email">itech@gmail.com</h2>
                    <h2 className="content-number">+91 80012 34567</h2>
                    <h1 className="content-title">IN Socials</h1>
                    <div className="content-icon">
                      <i className="bx bxl-twitch" />
                      <i className="bx bxl-facebook" />
                      <i className="bx bxl-instagram" />
                    </div>
                  </li>
                  <li className="contact-2">
                    <h1 className="content-title">GET IN TOUCH</h1>
                    <h4 className="content-required">
                      Enter your details below to get in touch with us
                    </h4>
                    <form action="">
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Your Email" />
                      <textarea
                        name="message"
                        id=""
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                      <button>GET IN TOUCH</button>
                    </form>
                  </li>
                  <li className="contact-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.6073826753984!2d72.83084812478005!3d19.383310447028894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af677b2ca297%3A0xfa96494c4ea34039!2sI%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1747202887453!5m2!1sen!2sin"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="button">
          <CartButton></CartButton>
          <UserButton></UserButton>
        </div>
        {/* mobile nav */}
        <div
          className={`icon ${mobileMenuOpen ? "active" : ""}`}
          onClick={handleToggleMenu}
        >
          <i className="bx bx-menu open" />
          <i className="bx bx-x close" />
        </div>
        <nav
          ref={menuRef}
          className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}
        >
          <div className="button button-mobile">
            <CartButton></CartButton>
            <UserButton></UserButton>
          </div>
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleSubmenuToggle(0, true, e)}>
                HOME <i className="bx bx-right-arrow" />
              </a>
            </li>
            <li>
              <a href="#pages">
                PAGES <i className="bx bx-right-arrow" />
              </a>
            </li>
            <li>
              <a href="#blog">
                BLOG <i className="bx bx-right-arrow" />
              </a>
            </li>
            <li>
              <a href="#portfolio">
                PORTFOLIO <i className="bx bx-right-arrow" />
              </a>
            </li>
            <li>
              <a href="#shop">
                SHOP <i className="bx bx-right-arrow" />
              </a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
