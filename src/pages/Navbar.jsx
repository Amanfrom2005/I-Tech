import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import "../styles/Animation.css";
import "../styles/768width.css";
import "../styles/1024width.css";

import pythonBook from "../assets/images/python-book.webp";
import javaBook from "../assets/images/java-book.webp";
import javascriptBook from "../assets/images/javascript-book.webp";
import homeImage1 from "../assets/images/home-nav-img/img1.png";
import homeImage2 from "../assets/images/home-nav-img/img2.png";
import homeImage3 from "../assets/images/home-nav-img/img3.png";
import homeImage4 from "../assets/images/home-nav-img/img4.png";
import homeImage5 from "../assets/images/home-nav-img/img5.png";
import homeImage6 from "../assets/images/home-nav-img/img6.png";

import CartButton from "../components/CartButton";
import UserButton from "../components/UserButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [setOpenSubmenuIndex] = useState(null);

  const menuRef = useRef(null); // Ref for the mobile menu
  const iconRef = useRef(null); // Ref for the menu icon
  const headerRef = useRef(null); // Add this ref

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = headerRef.current;
      if (!navbar) return;

      if (window.scrollY > lastScrollY) {
        // Scrolling Down - Hide Navbar
        navbar.classList.add("hidden");
        navbar.classList.remove("scrolled-up");
      } else {
        // Scrolling Up - Show Navbar with Color
        navbar.classList.remove("hidden");
        navbar.classList.add("scrolled-up");
      }

      // If fully scrolled to the top, remove the color
      if (window.scrollY === 0) {
        navbar.classList.add("remove-color");
        setTimeout(() => {
          navbar.classList.remove("scrolled-up", "remove-color");
        }, 300);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className="header-container">
        <div className="logo">
          <Link to="./">
            <h2>I-TECH</h2>
          </Link>
        </div>
        <nav className="pc-nav">
          <ul>
            <li>
              <Link to="./">
                HOME <i className="bx bx-down-arrow" />
              </Link>
              <ul className="home">
                <li>
                  <a href="#home1">
                    <img
                      className="home-img"
                      src={homeImage1}
                      alt="Home Image 1"
                    />
                    <div className="hover-title">
                      HOME 1 <br /> <span>Hero Section</span>
                    </div>
                  </a>
                  <a href="#home2">
                    <img
                      className="home-img"
                      src={homeImage2}
                      alt="Home Image 2"
                    />
                    <div className="hover-title">
                      HOME 2 <br /> <span>Companys & Affiliation</span>
                    </div>
                  </a>
                  <a href="#home3">
                    <img
                      className="home-img"
                      src={homeImage3}
                      alt="Home Image 3"
                    />
                    <div className="hover-title">
                      HOME 3 <br /> <span>Teachers</span>
                    </div>
                  </a>
                  <a href="#home4">
                    <img
                      className="home-img"
                      src={homeImage4}
                      alt="Home Image 4"
                    />
                    <div className="hover-title">
                      HOME 4 <br /> <span>Testimonials</span>
                    </div>
                  </a>
                  <a href="#home5">
                    <img
                      className="home-img"
                      src={homeImage5}
                      alt="Home Image 5"
                    />
                    <div className="hover-title">
                      HOME 5 <br /> <span>Contact Section</span>
                    </div>
                  </a>
                  <a href="#home6">
                    <img
                      className="home-img"
                      src={homeImage6}
                      alt="Home Image 6"
                    />
                    <div className="hover-title">
                      HOME 6 <br /> <span>Footer Section</span>
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
            </li>
            <li>
              <a href="#portfolio">
                PORTFOLIO <i className="bx bx-down-arrow" />
              </a>
            </li>
            <li>
              <Link to="/store">
                SHOP <i className="bx bx-down-arrow" />
              </Link>
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
                      <a href="https://www.youtube.com/channel/UCixIFBnkoeAhtwd6mMeeWZg"><i className="bx bxl-youtube" /></a>
                      <a href="https://www.facebook.com/people/ITechEducationOfficial/100088072031334/"><i className="bx bxl-facebook" /></a>
                      <a href="https://www.instagram.com/itecheducation.official/"><i className="bx bxl-instagram" /></a>
                    </div>
                  </li>
                  <li className="contact-2">
                    <h1 className="content-title">GET IN TOUCH</h1>
                    <h4 className="content-required">
                      Enter your details below to get in touch with us
                    </h4>
                    <form action="">
                      <input type="text" id="name" placeholder="Your Name" />
                      <input type="email" id="email" placeholder="Your Email" />
                      <textarea
                        name="message"
                        id="message"
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
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="button nav-button">
          <CartButton></CartButton>
          <Link to="/Login">
              <UserButton />
          </Link>
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
            <Link to="/Login">
              <UserButton />
            </Link>
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
