import "../styles/Navbar.css";

function Navbar() {
    return (
        <header id="header">
            <div className="header-container">
                <div className="logo">
                    <a href="./index.html">
                        <img src="./images/logo.webp" alt="Rebell Gaming Logo" />
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
                                            src="./images/mm-hp1.webp"
                                            alt="Home Image 1"
                                        />
                                        <div className="hover-title">
                                            HOME 1 <br /> <span>PC GAME</span>
                                        </div>
                                    </a>
                                    <a href="#home-2.html">
                                        <img
                                            className="home-img"
                                            src="./images/mm-hp2.webp"
                                            alt="Home Image 2"
                                        />
                                        <div className="hover-title">
                                            HOME 2 <br /> <span>ESPORT TEAM</span>
                                        </div>
                                    </a>
                                    <a href="#home-3.html">
                                        <img
                                            className="home-img"
                                            src="./images/mm-hp3.webp"
                                            alt="Home Image 3"
                                        />
                                        <div className="hover-title">
                                            HOME 3 <br /> <span>MOBILE GAME</span>
                                        </div>
                                    </a>
                                    <a href="#home-4.html">
                                        <img
                                            className="home-img"
                                            src="./images/mm-hp4.webp"
                                            alt="Home Image 4"
                                        />
                                        <div className="hover-title">
                                            HOME 4 <br /> <span>ESPORT TEAM</span>
                                        </div>
                                    </a>
                                    <a href="#home-5.html">
                                        <img
                                            className="home-img"
                                            src="./images/mm-hp5.webp"
                                            alt="Home Image 5"
                                        />
                                        <div className="hover-title">
                                            HOME 5 <br /> <span>ESPORTS SHOP</span>
                                        </div>
                                    </a>
                                    <a href="#home-6.html">
                                        <img
                                            className="home-img"
                                            src="./images/mm-hp6.webp"
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
                                            <a href="#blog-masonry-2-col-+-sidebar">2 col + sidebar</a>
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
                                                    src="./images/product-9-540x640.webp"
                                                    alt="Shop Item 1"
                                                />
                                                <div className="shop-item-heart">
                                                    <i className="bx bx-heart" />
                                                    <title className="shop-item-icon-name">
                                                        Add To Wishlist
                                                    </title>
                                                </div>
                                                <div className="shop-item-compare">
                                                    <i className="bx bx-git-compare" />
                                                    <title className="shop-item-icon-name">Compare</title>
                                                </div>
                                                <div className="shop-item-add">ADD TO CART</div>
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
                                                    src="./images/product-8-540x640.webp"
                                                    alt="Shop Item 2"
                                                />
                                                <div className="shop-item-heart">
                                                    <i className="bx bx-heart" />
                                                    <title className="shop-item-icon-name">
                                                        Add To Wishlist
                                                    </title>
                                                </div>
                                                <div className="shop-item-compare">
                                                    <i className="bx bx-git-compare" />
                                                    <title className="shop-item-icon-name">Compare</title>
                                                </div>
                                                <div className="shop-item-add">ADD TO CART</div>
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
                                                    src="./images/product-7-540x640.webp"
                                                    alt="Shop Item 3"
                                                />
                                                <div className="shop-item-heart">
                                                    <i className="bx bx-heart" />
                                                    <title className="shop-item-icon-name">
                                                        Add To Wishlist
                                                    </title>
                                                </div>
                                                <div className="shop-item-compare">
                                                    <i className="bx bx-git-compare" />
                                                    <title className="shop-item-icon-name">Compare</title>
                                                </div>
                                                <div className="shop-item-add">ADD TO CART</div>
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
                                            27 Division St, New York, <br /> NY 10002, USA
                                        </h3>
                                        <h2 className="content-email">rebell@mail.com</h2>
                                        <h2 className="content-number">+1 800 123 45 67</h2>
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
                                            Your email address will not be published. Required fields are
                                            marked *
                                        </h4>
                                        <form action="">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="email" placeholder="Your Email" />
                                            <textarea
                                                name="message"
                                                id=""
                                                placeholder="Your Comment"
                                                defaultValue={""}
                                            />
                                            <button>GET IN TOUCH</button>
                                        </form>
                                    </li>
                                    <li className="contact-3">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0465742848037!2d72.8726139116844!3d19.410393541312217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a8b57f64b7c7%3A0x569bf10b9bb8b91e!2sTungar%20Phata%20Rd%2C%20Golani%20Naka%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20sativli%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1743333940368!5m2!1sen!2sin"
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
                    <button>
                        <a href="./index.html">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={16}
                                viewBox="0 0 17 16"
                            >
                                <path d="M13.3692 0.0876985C12.7972 -0.193306 9.89516 0.127699 7.80313 2.13473C4.50708 5.42578 4.58608 9.76185 4.58608 9.76185C4.58608 9.76185 4.47708 10.2079 4.01307 9.56085C2.99705 8.26583 3.52906 5.28678 3.58906 4.87177C3.67306 4.28676 3.30006 4.26976 3.14505 4.46277C-0.527003 9.56085 2.78905 13.7349 4.96008 15.0599C7.50212 16.611 12.5162 16.61 14.5132 12.2099C17.0013 6.7308 14.0862 0.438704 13.3692 0.0876985Z"></path>
                            </svg>
                            <h1>PURCHASE ON ENVATO</h1>
                        </a>
                    </button>
                </div>
                {/* mobile nav */}
                <div className="icon">
                    <i className="bx bx-menu open" />
                    <i className="bx bx-x close" />
                </div>
                <nav className="mobile-nav">
                    <ul>
                        <li>
                            <a href="#home">
                                HOME <i className="bx bx-right-arrow" />
                            </a>
                            {/* <ul>
                      <li><a href="#home-1.html">Homepage 1</a></li>
                      <li><a href="#home-2.html">Homepage 2</a></li>
                      <li><a href="#home-3.html">Homepage 3</a></li>
                      <li><a href="#home-4.html">Homepage 4</a></li>
                      <li><a href="#home-5.html">Homepage 5</a></li>
                      <li><a href="#home-6.html">Homepage 6</a></li>
                  </ul> */}
                        </li>
                        <li>
                            <a href="#pages">
                                PAGES <i className="bx bx-right-arrow" />
                            </a>
                            {/* <ul>
                      <li><a href="#about-us">About Us</a></li>
                      <li><a href="#our-team">Our Team</a></li>
                      <li><a href="#team-single">Team Single</a></li>
                      <li><a href="#tournament-list">Tournament List</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#our-history">Our History</a></li>
                      <li><a href="#faq's">Faq’s</a></li>
                      <li><a href="#philosopy">Philosophy</a></li>
                      <li><a href="#typography">Typography</a></li>
                      <li><a href="#elements">Elements</a></li>
                      <li><a href="#page-404">Page 404</a></li>
                      <li><a href="#mega-menu-page">Mega Menu Page</a></li>
                      <li><a href="#coming-soon">Coming Soon</a></li>
                  </ul> */}
                        </li>
                        <li>
                            <a href="#blog">
                                BLOG <i className="bx bx-right-arrow" />
                            </a>
                            {/* <ul>
                      <li><a href="#blog-list">Blog List</a></li>
                      <li><a href="#blog-grid">Blog Grid</a></li>
                      <li><a href="#blog-masonry">Blog Masonry <i class='bx bx-down-arrow'></i></i></a>
                          <ul>
                              <li><a href="#blog-masonry-2-columns">2 columns</a></li>
                              <li><a href="#blog-masonry-2-col-+-sidebar">2 col + sidebar</a></li>
                              <li><a href="#blog-masonry-3-columns">3 columns</a></li>
                              <li><a href="#blog-masonry-4-col-wide">4 col wide</a></li>
                          </ul>
                      </li>
                      <li><a href="#blog-singles">Blog Singles <i class='bx bx-down-arrow'></i></a>
                          <ul>
                              <li><a href="#blog-singles-standard">Standard</a></li>
                              <li><a href="#blog-singles-video">Video</a></li>
                              <li><a href="#blog-singles-quote">Quote</a></li>
                              <li><a href="#blog-singles-gallery">Gallery</a></li>
                              <li><a href="#blog-singles-link">Link</a></li>
                              <li><a href="#blog-singles-audio">Audio</a></li>
                          </ul>
                      </li>
                      <li><a href="#single-layouts">Single Layouts <i class='bx bx-down-arrow'></i></a>
                          <ul>
                              <li><a href="#single-layouts-overlay-image">Overlay Image</a></li>
                              <li><a href="#single-layouts-title-first">Title First</a></li>
                              <li><a href="#single-layouts-image-first">Image First</a></li>
                          </ul>
                      </li>
                  </ul> */}
                        </li>
                        <li>
                            <a href="#portfolio">
                                PORTFOLIO <i className="bx bx-right-arrow" />
                            </a>
                            {/* <ul>
                      <li><a href="#grid">Grid <i class='bx bx-down-arrow'></i></a>
                          <ul>
                              <li><a href="#grid-2-columns">2 columns</a></li>
                              <li><a href="#grid-3-columns">3 columns</a></li>
                              <li><a href="#grid-4-col-wide">4 col wide</a></li>
                              <li><a href="#grid-5-col-wide">5 col wide</a></li>
                          </ul>
                      </li>
                      <li><a href="#mansonry">Masonry <i class='bx bx-down-arrow'></i></a>
                          <ul>
                              <li><a href="#mansonry-grid-1">Grid 1</a></li>
                              <li><a href="#mansonry-grid-2">Grid 2</a></li>
                              <li><a href="#mansonry-grid-3">Grid 3</a></li>
                          </ul>
                      </li>
                      <li><a href="#gallery">Gallery</a></li>
                      <li><a href="#single">Single</a></li>
                  </ul> */}
                        </li>
                        <li>
                            <a href="#shop">
                                SHOP <i className="bx bx-right-arrow" />
                            </a>
                            {/* <ul>
                      <li><a href="#Products-grid">Products Grid</a></li>
                      <li><a href="#single-product">Single Product</a></li>
                      <li><a href="#cart">Cart</a></li>
                      <li><a href="#checkout">Checkout</a></li>
                      <li><a href="#wishlist">Wishlist</a></li>
                      <li><a href="#login-register">Login - Register</a></li>
                      <li><a href="#help-center">Help Center</a></li>
                  </ul> */}
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                    <form className="search-form">
                        <input
                            required=""
                            type="text"
                            className="search-field"
                            placeholder="Search …"
                        />
                        <i className="search__icon">
                            <svg
                                width="1em"
                                height="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ opacity: 1 }}
                            >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                        </i>
                    </form>
                    <div className="button button-mobile">
                        <button>
                            <a href="./index.html">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={16}
                                    viewBox="0 0 17 16"
                                >
                                    <path d="M13.3692 0.0876985C12.7972 -0.193306 9.89516 0.127699 7.80313 2.13473C4.50708 5.42578 4.58608 9.76185 4.58608 9.76185C4.58608 9.76185 4.47708 10.2079 4.01307 9.56085C2.99705 8.26583 3.52906 5.28678 3.58906 4.87177C3.67306 4.28676 3.30006 4.26976 3.14505 4.46277C-0.527003 9.56085 2.78905 13.7349 4.96008 15.0599C7.50212 16.611 12.5162 16.61 14.5132 12.2099C17.0013 6.7308 14.0862 0.438704 13.3692 0.0876985Z"></path>
                                </svg>
                                <h1>PURCHASE ON ENVATO</h1>
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar