import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import  "./card.css"
import "./footer.css"
import almonds from "./assets/almond.png";
import cashew from "./assets/cashew.png";
import pista from "./assets/pista.png";
import walnut from "./assets/walnut.jpg";
import dates from "./assets/dates.jpg";
import mixnuts from "./assets/mixnut.jpg";

import datesCategory from "./assets/dates-category.jpg";
import berriesCategory from "./assets/berries-category.jpg";
import spicesCategory from "./assets/spices-category.png";


import bigChocolate from "./assets/big-chocolate.avif";
import smallChocolate from "./assets/small-chocolate.jpg";

function App() {
   const products = [
    {
      name: "Almonds",
      price: "₹500 / kg",
      image: almonds,
    },

    {
      name: "Cashew",
      price: "₹700 / kg",
      image: cashew,
    },

    {
      name: "Pistachio",
      price: "₹900 / kg",
      image: pista,
    },

    {
      name: "Walnut",
      price: "₹850 / kg",
      image: walnut,
    },
  ];

  return (
    <div>

           {/* Header */}

      <header className="header">

        <div className="logoContainer">

          <img
            src={logo}
            alt="logo"
            className="logo"
          />

          <h1>Golden Harvest Nuts</h1>

        </div>

        <nav>

          <a href="#" className="link">
            Home
          </a>

          <a href="#" className="link">
            Products
          </a>

          <a href="#" className="link">
            About
          </a>

          <a href="#" className="link">
            Contact
          </a>

        </nav>

      </header>

      {/* Hero Section */}

      <div className="hero">

        <img
          src={banner}
          alt="banner"
          className="heroImage"
        />

        <div className="heroText">

          <h1>Premium Dry Fruits</h1>

          <p>
            Healthy • Fresh • Natural
          </p>

          <button className="button">
            Shop Now
          </button>

        </div>

      </div>


      {/* Products */}
      
    <div>

      <h1 className="title">
        Dry Fruits Store
      </h1>

      <div className="container">

        {products.map((item, index) => (

          <div className="card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="image"
            />

            <h2>{item.name}</h2>

            <p>{item.price}</p>

            <button className="button">
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </div>
  
    {/* Client Stories Section */}

<section className="stories-section">

  <h1 className="stories-title">
    Our Clients' Stories
  </h1>

  <div className="stories-container">

    {/* Story 1 */}
    <div className="story-card">

      <img
        src={dates}
        alt="Dates"
        className="story-image"
      />

      <div className="story-content">

        <h2>Fresh Premium Dates</h2>

        <p>
          “The quality of dates was amazing.
          Very fresh, soft and naturally sweet.
          My family loved it.”
        </p>

        <h4>- Rahul Sharma</h4>

      </div>

    </div>

    {/* Story 2 */}
    <div className="story-card">

      <img
        src={mixnuts}
        alt="Dry Fruits"
        className="story-image"
      />

      <div className="story-content">

        <h2>Healthy Mixed Dry Fruits</h2>

        <p>
          “Excellent packaging and premium
          quality dry fruits. Delivery was fast
          and products tasted fresh.”
        </p>

        <h4>- Priya Verma</h4>

      </div>

    </div>

  </div>

</section>


{/* Categories Section */}

<section className="category-section">

  <h1 className="category-title">
    Discover Categories
  </h1>

  <p className="category-text">
    From rich and crunchy nuts to luscious chocolates
    and wholesome dry fruits.
  </p>

  <div className="category-container">

    {/* Category 1 */}
    <div className="category-card">

      <img
        src={datesCategory}
        alt="Dates & Nuts"
        className="category-image"
      />

      <h2>Dates & Nuts</h2>

      <p>55 items</p>

    </div>

    {/* Category 2 */}
    <div className="category-card">

      <img
        src={berriesCategory}
        alt="Seeds & Berries"
        className="category-image"
      />

      <h2>Seeds, Berries & Dry Fruits</h2>

      <p>43 items</p>

    </div>

    {/* Category 3 */}
    <div className="category-card">

      <img
        src={spicesCategory}
        alt="Spices"
        className="category-image"
      />

      <h2>Spices</h2>

      <p>18 items</p>

    </div>

  </div>

</section>

{/* Special Offer Section */}

<section className="offer-section">

  {/* Left Images */}
  <div className="offer-images">

    <img
      src={bigChocolate}
      alt="Chocolate"
      className="big-image"
    />

    <img
      src={smallChocolate}
      alt="Chocolate"
      className="small-image"
    />

  </div>

  {/* Right Text */}
  <div className="offer-content">

    <h4>Special Offer</h4>

    <h1>
      Sweet Savings on Chocolate
    </h1>

    <p>
      Discover unbeatable offers on our finest chocolates.
      Enjoy special discounts.
    </p>

    <button className="offer-button">
      Shop Now
    </button>

  </div>

</section>


      {/* Footer */}
     <footer className="footer">

  <div className="footer-container">

    {/* Quick Links */}
    <div className="footer-section">

      <h2>Quick Links</h2>

      <p>Cart</p>
      <p>Wishlist</p>
      <p>Checkout</p>

    </div>

    {/* Pages */}
    <div className="footer-section">

      <h2>Pages</h2>

      <p>About us</p>
      <p>Shop</p>
      <p>Gifting</p>
      <p>Healthy Offers</p>
      <p>Contact</p>

    </div>

    {/* Connect */}
    <div className="footer-section">

      <h2>Connect</h2>

      <p>+91 95912 70231</p>
      <p>+91 96209 28000</p>
      <p>support@healthykingdom.in</p>

    </div>

    {/* Address */}
    <div className="footer-section">

      <h2>Contact</h2>

      <p>
        #68, Sri Rama Nilaya,
      </p>

      <p>
        Marathahalli Main Road,
      </p>

      <p>
        Near Sri Rama Paints & Hardware,
      </p>

      <p>
        Bangalore - 560037
      </p>

    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Dry Fruits Store
  </div>

</footer>
    </div>
  );
}



export default App;